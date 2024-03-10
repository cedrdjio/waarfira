import { Component } from '@angular/core';
import { ChatUsers } from '../../../shared/model/chat.model';
import { ChatService } from '../../../shared/services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [
    PickerModule,
    EmojiModule,
    FeatherIconsComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    BreadcrumbComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})
export class ChatsComponent {
  public openTab : string = "call";
  public users : ChatUsers[] = []
  public searchUsers : ChatUsers[] = []
  public chatUser : any;
  public profile : any;
  public chats : any;
  public chatText : string = '';
  public error : boolean = false;
  public notFound: boolean = false;
  public id : any;
  public searchText : string ='';
  public showEmojiPicker:boolean = false;
  public emojies: any;
  public mobileToggle: boolean = false

  constructor(private chatService: ChatService) {
    this.chatService.getUsers().subscribe(users => {
      this.searchUsers = users
      this.users = users
    })
  }

  ngOnInit() {
    this.userChat(this.id)
    this.getProfile()
  }

  public toggleEmojiPicker(){
    this.showEmojiPicker=!this.showEmojiPicker;
  }

  addEmoji(event: { emoji: { native: any; }; }){
    const text = `${event.emoji.native}`;
    this.chatText = text;
    this.showEmojiPicker = false;
  }

  public tabbed(val: string) {
  	this.openTab = val
  }

  // Get user Profile
  public getProfile() {
    this.chatService.getCurrentUser().subscribe(userProfile => this.profile = userProfile)
  }

  // User Chat
  public userChat(id:number =1){
    this.chatService.chatToUser(id).subscribe(chatUser => this.chatUser = chatUser)
    this.chatService.getChatHistory(id).subscribe(chats => this.chats = chats)
  }

  // Send Message to User
  public sendMessage(form: any) {
    if(!form.value.message){
      this.error = true
      return false
    }
    this.error = false
    let chat = {
      sender: this.profile.id,
      receiver: this.chatUser.id,
      receiver_name: this.chatUser.name,
      message: form.value.message
    }
    this.chatService.sendMessage(chat)
    this.chatText = ''
    this.chatUser.seen = 'online'
    this.chatUser.online = true
    return true

  }

  searchTerm(term: any) {
    if(!term) return this.searchUsers = this.users
    term = term.toLowerCase();
    let user: ChatUsers[] = []
    this.users.filter(users => {
      if(users.name&&users.name.toLowerCase().includes(term)) {
        user.push(users)
      }
    })
    this.searchUsers = user
    return this.searchUsers = this.users
  }

  mobileMenu() {
    this.mobileToggle = !this.mobileToggle;
  }

}
