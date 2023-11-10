import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-top-three-projects',
  templateUrl: './top-three-projects.component.html',
  styleUrls: ['./top-three-projects.component.css']
})
export class TopThreeProjectsComponent implements OnInit {

  topProjects: Project[] = [];
  constructor(private _projectService:ProjectService){
  }

  ngOnInit(): void {
    this._projectService.getTopThreeProjects(3).subscribe((data)=> {
      this.topProjects = data;
    })

    this._projectService.getCompletedProjects().subscribe((data)=>{
      this.alertCompletedProjects(data);
    })


  } 

  alertCompletedProjects(projects: Project[]): void {
    let message = `Completed Projects are: ${projects.length} \n \n`;
    projects.forEach((project) => {
      message += `\t Project Name: ${project.name} \n`;
    });

    alert(message);
  }
  
}
