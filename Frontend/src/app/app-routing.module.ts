import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProjectEditComponent } from './Components/project-edit/project-edit.component';
import { ProjectComponent } from './Components/project/project.component';
import { UsersComponent } from './Components/users/users.component';
import { AuthGuard } from './Services/auth.guard';


const routes: Routes = [
  { path :'' ,component:HomeComponent},
  { path :'login' , component:LoginComponent},
  { path :'dashboard' ,canActivate: [AuthGuard],component:DashboardComponent},
  { path :'projects/:project_id' ,canActivate: [AuthGuard],component:ProjectComponent},
  { path :'projects/:project_id/edit' ,canActivate: [AuthGuard],component:ProjectEditComponent},
  { path :'users' ,canActivate: [AuthGuard],component:UsersComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
