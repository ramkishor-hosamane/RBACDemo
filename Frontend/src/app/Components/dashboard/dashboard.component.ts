import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router,public auth_service:AuthService) { }
  projects:any
  ngOnInit(): void {
    let url="http://127.0.0.1:3000/dashboard"
    this.http.get<any>(url).subscribe({
      next:(res)=>{console.log(res)
        this.projects=res},
      error:(error)=>{
        console.log(error)
        this.router.navigate(['/login'])
    }
    })
  }

}
