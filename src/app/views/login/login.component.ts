import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean = false
  constructor(private authService:AuthService,private router:Router) { }
  login(data:any){
    this.authService.login(data).subscribe({
      next:(res:any)=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('/profile')
      },
      error:(httpError)=>{
        console.log(httpError)
        this.invalidLogin = true
      }
    })

  }

  ngOnInit(): void {
  }

}
