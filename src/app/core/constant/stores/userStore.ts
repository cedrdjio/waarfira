import { computed, inject } from "@angular/core";
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from "rxjs";
import { User } from "../../models/user";
import {
  patchState,
  signalState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { AuthService } from "../../services/auth/auth.service";

export interface UserStateInterface {
  user: User ;
  isLoading: boolean;
  error: string | null;
}

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState<UserStateInterface>({
    user: new User(),
    error: null,
    isLoading: false,
  }),
  withMethods((store, UsersService = inject(AuthService)) => ({
    storeUser(user: User) {
        patchState(store, { user, isLoading: false , error: null,});
    },

   loadUser:  rxMethod<void>(pipe(tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return UsersService.getLoggedInUser().pipe(
            tap({
              next: (res) => patchState(store, { user:res }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      ))

    // loadUser: rxMethod<void>(
    //   pipe(
    //     switchMap(() => {
    //       return UsersService.getLoggedInUser().pipe(
    //         tap((resUser) => {
    //           const res = resUser;
    //           patchState(store, { user:res, isLoading: false , error: null,});
    //         })
    //       );
    //     })
    //   )
    // ),
  })),
  withHooks({
    onInit(store) {
      store.loadUser();
      console.log(store.user());

    },
  })
);
