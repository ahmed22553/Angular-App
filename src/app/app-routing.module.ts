import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { UpdateTaskComponent } from './views/update-task/update-task.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'tasks',component:TasksComponent,canActivate:[AuthGuardService]},
  {path:'addTask',component:AddTaskComponent,canActivate:[AuthGuardService]},
  {path:'editTask/:x',component:UpdateTaskComponent,canActivate:[AuthGuardService]},
  {path:'editProfile',component:EditProfileComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
