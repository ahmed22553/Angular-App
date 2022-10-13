import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Users = {}
  constructor(private userService:UserService) { }
  getProfile(){
    this.userService.getProfile().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user = res
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getProfile()
  }

}
