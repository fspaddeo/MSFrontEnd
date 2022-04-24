import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { IndexSkillsComponent } from './skills/index-skills/index-skills.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'skills', component:IndexSkillsComponent},
  {path:'skills/create', component:CreateSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
