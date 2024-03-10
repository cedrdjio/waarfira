import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { TapToTopComponent } from './shared/components/tap-to-top/tap-to-top.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgbModule,
    LoaderComponent,
    TapToTopComponent,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'waarfira';
}
