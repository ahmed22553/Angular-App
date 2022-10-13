import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  user:Users = {}
  file:any

  getProfile(){
    this.userService.getProfile().subscribe({
      next:(res:any)=>{
        this.user = res
      }
    })
  }

  handelUpload(event:any){
    console.log(event)
    this.file = event.target.files
  }

  uploadFile(){
    if(this.file){
      console.log('here')
    const myData = new FormData()
    myData.append('avatar',this.file[0])
    this.userService.userImage(myData).subscribe(()=>{})
  }
}

updateProfile(data:any){
  console.log(data)
const obj ={
  name:data.name,
  // age:data.age
}
  this.userService.updateProfile(obj).subscribe({
    next:()=>{
    this.uploadFile()
    this.router.navigateByUrl('/profile')
    }
  })
}


  ngOnInit(): void {
    this.getProfile()
  }

}
