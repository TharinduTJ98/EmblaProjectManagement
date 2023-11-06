import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http:HttpClient) { }

  getProjects():Observable<any>{
    return this._http.get("http://localhost:5000/api/v1/projects");
  }

  deleteProject(id:any):Observable<any>{
    return this._http.delete(`http://localhost:5000/api/v1/projects/${id}`)
  }
}
