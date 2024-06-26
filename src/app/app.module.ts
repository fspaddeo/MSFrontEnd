import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerListComponent } from './workers/worker-list/worker-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexCandidateComponent } from './candidates/index-candidate/index-candidate.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { IndexSkillsComponent } from './skills/index-skills/index-skills.component';
import { EditWorkerComponent } from './workers/edit-worker/edit-worker.component';
import { CreateWorkerComponent } from './workers/create-worker/create-worker.component';
import { FormSkillComponent } from './skills/form-skill/form-skill.component';
import { EditSkillComponent } from './skills/edit-skill/edit-skill.component';
import { WorkerFilterComponent } from './workers/worker-filter/worker-filter.component';
import { FormWorkerComponent } from './workers/form-worker/form-worker.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { TokenInterceptorService } from './authentication/token-interceptor.service';

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
    FormSkillComponent,
    EditSkillComponent,
    WorkerFilterComponent,
    FormWorkerComponent,
    MultipleSelectorComponent,
    LoginPageComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
