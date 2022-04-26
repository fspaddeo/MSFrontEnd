import { Component, OnInit } from '@angular/core';
import { WorkerCreationDto } from '../workers.model';

@Component({
  selector: 'app-create-worker',
  templateUrl: './create-worker.component.html',
  styleUrls: ['./create-worker.component.css']
})
export class CreateWorkerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(workerCreationDto: WorkerCreationDto){
    console.log(workerCreationDto);
  }
}
