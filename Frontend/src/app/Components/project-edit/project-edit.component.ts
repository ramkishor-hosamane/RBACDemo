import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/Api/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  project:any=[]
  project_id:any
  constructor(private route:ActivatedRoute,private project_service:ProjectService,private router:Router) { }

  ngOnInit(): void {

    this.project_id = this.route.snapshot.paramMap.get('project_id');
    this.project_service.getProject(this.project_id).subscribe({
      next:(res)=>{console.log(res)
        this.project = res  
      },
      error:(err)=>{console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You do not have access to this project!'
      })
        this.router.navigate(['/dashboard'])
      
      }

    })

  }

  onSubmitProjectEditForm(form:NgForm){
    console.log(form.value)
    // this.auth_service.loginUser(form.value).subscribe({
    //   next:(res) => {
    //     console.log('Success!',res)
    //     localStorage.setItem('token', res.accessToken)
    //     localStorage.setItem('role', res.role)
    //     this.router.navigate(['/dashboard'])
    // },
    //   error:(error) => console.error('!error',error)
    // })
  }

  
}
