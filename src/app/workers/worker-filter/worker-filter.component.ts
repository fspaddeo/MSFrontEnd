import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkerCreationDto, WorkerDto } from '../workers.model';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-worker-filter',
  templateUrl: './worker-filter.component.html',
  styleUrls: ['./worker-filter.component.css']
})
export class WorkerFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private workerService: WorkersService) { }

  form!: FormGroup;

  cities=[{id:1, name:'Cagliari'}, {id:2, name:'Milano'}, {id:3, name:'Napoli'}]

  originalWorkers: WorkerDto[] =  [];

  workers: WorkerDto[] =  [];

  ngOnInit(): void {
    this.workerService.getAll().subscribe(workers =>{
      this.originalWorkers = workers;
    });

    this.workers = this.originalWorkers;

    this.form = this.formBuilder.group({
       name:'',
       birthPlace:'',
       dateOfBirth:new Date(),
    });

    this.form.valueChanges.subscribe(values => {
      this.workers = this.originalWorkers;
      this.filterWorkers(values);
    })

  }

  filterWorkers(values: any){
    if(values.name){
      this.workers = this.workers.filter(worker=> worker.name.indexOf(values.name) !== -1)
    }
  }

  clearForm(){
    this.form.reset();
  }

}
