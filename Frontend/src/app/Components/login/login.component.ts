import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private auth_service:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitLoginForm(form:NgForm){
    this.auth_service.loginUser(form.value).subscribe({
      next:(res) => {
        console.log('Success!',res)
        this.auth_service.updateUserSession(res.accessToken,res.user)
        this.router.navigate(['/dashboard'])
    },
      error:(error) => console.error('!error',error)
    })
  }
}
