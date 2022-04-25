import { Component, OnInit } from '@angular/core';
import { workerCreationDTO } from '../workers.model';

@Component({
  selector: 'app-create-worker',
  templateUrl: './create-worker.component.html',
  styleUrls: ['./create-worker.component.css']
})
export class CreateWorkerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(workerCreationDTO: workerCreationDTO){
    console.log(workerCreationDTO);
  }
}
