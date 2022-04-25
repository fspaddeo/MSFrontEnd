import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { workerCreationDTO } from '../workers.model';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute ) { }

  model: workerCreationDTO = {name: 'Filippo', dateOfBirth: new Date()};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      alert(params['code']);
    })
  }

  saveChanges(workerCreationDTO: workerCreationDTO){
    console.log(workerCreationDTO);
  }

}
