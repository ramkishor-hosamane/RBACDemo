import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './Services/auth.guard';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { ProjectComponent } from './Components/project/project.component';
import { ProjectService } from './Services/Api/project.service';
import { ProjectEditComponent } from './Components/project-edit/project-edit.component';
import { UsersComponent } from './Components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    ProjectComponent,
    ProjectEditComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //providers:[AuthGuard],
  providers: [AuthService, AuthGuard,DashboardComponent,ProjectService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
