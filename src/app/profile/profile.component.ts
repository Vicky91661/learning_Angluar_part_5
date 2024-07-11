import { Component } from '@angular/core';
import { ProfilePicSelectorComponent } from "../profile-pic-selector/profile-pic-selector.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfilePicSelectorComponent,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profilePicUrl : string=''
  isPopupOpen:boolean=false;
  
  openProfilePicSelector(){
    this.isPopupOpen = true;
  }

  updateProfilePic(newPicUrl:string){
    this.profilePicUrl=newPicUrl;
    this.isPopupOpen=false;
  }
}
