import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-top-three-projects',
  templateUrl: './top-three-projects.component.html',
  styleUrls: ['./top-three-projects.component.css']
})
export class TopThreeProjectsComponent {

  topProjects!: [];
  constructor(private _projectService:ProjectService){
  }

  topThreeProjects(){
    this._projectService.getTopThreeProjects().subscribe({
      next: (res) => {
        this.topProjects = res;
        
        console.log(this.topProjects);
      }
    })
  }
}
