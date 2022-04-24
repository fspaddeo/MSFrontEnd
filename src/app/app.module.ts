import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerListComponent } from './workers/worker-list/worker-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexCandidateComponent } from './candidates/index-candidate/index-candidate.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { IndexSkillsComponent } from './skills/index-skills/index-skills.component';
import { EditWorkerComponent } from './workers/edit-worker/edit-worker.component';
import { CreateWorkerComponent } from './workers/create-worker/create-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexSkillsComponent,
    IndexCandidateComponent,
    CreateSkillComponent,
    EditWorkerComponent,
    CreateWorkerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
