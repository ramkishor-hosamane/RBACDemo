import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }


  public getUsers(): Observable<any>{
    let url=`http://127.0.0.1:3000/users`
    return this.http.get(url)
  }


  
}
