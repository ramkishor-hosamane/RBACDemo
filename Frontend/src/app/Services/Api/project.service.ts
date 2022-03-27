import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  public getProject(id:any): Observable<any>{
    let url=`http://127.0.0.1:3000/projects/${id}`
    return this.http.get(url)
  }
}
