import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  projectForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _projectService: ProjectService, private router: Router ){
    this.projectForm = this._formBuilder.group({
      name: '',
      revenue: '',
    })
  }

  onFormSubmit(){
    if(this.projectForm.valid){
      // console.log(this.projectForm.value);
      this._projectService.addProject(this.projectForm.value).subscribe({
        next: (val:any)=>{
          alert("Added Successfully");
          this.router.navigate(['./projectList'])
        },
        error: (error: any) => {
          console.log(error);
        }
      })
    }
  }
}
