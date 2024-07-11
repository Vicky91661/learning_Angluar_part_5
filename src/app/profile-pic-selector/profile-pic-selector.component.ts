import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-pic-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-pic-selector.component.html',
  styleUrl: './profile-pic-selector.component.css'
})
export class ProfilePicSelectorComponent {
  @Output() picSelected = new EventEmitter<string>()

  selectedPicUrl :string ='';


  onFileSelected(event:any){
    // console.log(event.target.files[0])
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload=()=>{
        this.selectedPicUrl = reader.result as string;
      }
      reader.readAsDataURL(file);
    }
  }
  confirmSelector(){
    console.log("selected");
    this.picSelected.emit(this.selectedPicUrl)
  }
}
