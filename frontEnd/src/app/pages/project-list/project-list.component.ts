import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{
  displayedColumns: string[] = ['name','revenue', 'isCompleted', 'Action'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.displayProjectList();
  }

  displayProjectList(){
    this._projectService.getProjects().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    })
  }

  deleteProject(id:number){
    this._projectService.deleteProject(id).subscribe({
      next:(res)=> {
        if(confirm("Do you want to delete this Project?")){
          alert("Successfully deleted!");
          this.displayProjectList();
        }
      }
    })
  }

}
