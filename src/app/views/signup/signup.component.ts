import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  invalidEmail:boolean = false
  invalidAge:boolean = false
  invalidPassword:boolean = false
  msgAge:string =''
  msgPassword:string = ''
  onSubmit(data:any){
    this.authService.signUP(data).subscribe({
      next:(res:any)=>{
       //console.log(res)
       localStorage.setItem('token',res.token)
       this.router.navigateByUrl('/profile')
      },
      error:(httpError:any)=>{
       console.log(httpError)
        if(httpError.error.code === 11000){
          this.invalidEmail = true
        }
        else if(httpError.error.errors.age){
          this.invalidAge = true
          this.msgAge = httpError.error.errors.age.message
        }
        else if(httpError.error.errors.password){
          this.invalidPassword = true
          this.msgPassword = httpError.error.errors.password.message
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
