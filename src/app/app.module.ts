import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerListComponent } from './workers/worker-list/worker-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerListComponent,
    GenericListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
