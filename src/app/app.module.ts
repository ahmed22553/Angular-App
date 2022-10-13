import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './views/profile/profile.component';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TasksComponent } from './views/tasks/tasks.component';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';
import { UpdateTaskComponent } from './views/update-task/update-task.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    TasksComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UserService,
    TasksService,
    AuthGuardService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
