import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { EditSkillComponent } from './skills/edit-skill/edit-skill.component';
import { IndexSkillsComponent } from './skills/index-skills/index-skills.component';
import { CreateWorkerComponent } from './workers/create-worker/create-worker.component';
import { EditWorkerComponent } from './workers/edit-worker/edit-worker.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'workers/create', component:CreateWorkerComponent},
  {path:'workers/edit/:code', component:EditWorkerComponent},

  {path:'skills', component:IndexSkillsComponent},
  {path:'skills/create', component:CreateSkillComponent},
  {path:'skills/edit/:id', component:EditSkillComponent},

  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
