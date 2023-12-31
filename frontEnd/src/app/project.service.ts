import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http:HttpClient) { }

  getProjects():Observable<any>{
    return this._http.get("http://localhost:3000/projects");
  }

  deleteProject(id:any):Observable<any>{
    return this._http.delete(`http://localhost:3000/projects/${id}`)
  }
}
