import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user_source = new BehaviorSubject<Object>({});
  user_observer = this.user_source.asObservable();
  user: any;

  constructor(private http:HttpClient,private router:Router) { 
    this.user_observer.subscribe(
      data => {
        this.user = data;
      }
    )

  }

  updateUserSession(token:any,user:any){
    localStorage.setItem('token', token)
    this.user_source.next(user);
  }
  isUserAdmin(){
    return this.user.role == 'admin'
  }
  loginUser(user:any) {
    let url="http://127.0.0.1:3000/login"
    return this.http.post<any>(url,user);
  }

  logoutUser() {

    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  getToken() {

    return localStorage.getItem('token')
  }

  loggedIn() {
    
    return !!localStorage.getItem('token')    
  }

}
