import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private user_service:UserService) { }
  users:any = []
  ngOnInit(): void {
    this.user_service.getUsers().subscribe({
      next:(res)=>{console.log(res)
        this.users=res},
      error:(error)=>{
        console.log(error)

      }
    })
  }

}
