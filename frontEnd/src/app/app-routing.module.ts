import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { TopThreeProjectsComponent } from './pages/top-three-projects/top-three-projects.component';

const routes: Routes = [
  {path:'projectList', component:ProjectListComponent},
  {path:'addProject', component:AddProjectComponent},
  {path:'', component:TopThreeProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
