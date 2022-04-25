import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-worker-filter',
  templateUrl: './worker-filter.component.html',
  styleUrls: ['./worker-filter.component.css']
})
export class WorkerFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  cities=[{id:1, name:'Cagliari'}, {id:2, name:'Milano'}, {id:3, name:'Napoli'}]

  workers =[{
    name : 'Spiderman',
    dateOfBirth: new Date(),
    salary: 1000,
    birthPlace: 'Cagliari',
    image: "",
  },
  {
    name : 'Moana',
    dateOfBirth: new Date(),
    salary: 1500,
    birthPlace: 'Milano',
    image: "",
  },
  {
    name : 'Fantastic beasts',
    dateOfBirth: new Date(),
    salary: 1300,
    birthPlace: 'Napoli',
    image: "",
  },
  {
    name : 'Spiderman',
    dateOfBirth: new Date(),
    salary: 4000,
    birthPlace: 'Foggia',
    image: "",
  },
  {
    name : 'Moana',
    dateOfBirth: new Date(),
    salary: 3500,
    birthPlace: 'Torino',
    image: "",
  },
  {
    name : 'Fantastic beasts',
    dateOfBirth: new Date(),
    salary: 3300,
    birthPlace: 'Verona',
    image: "",
  }];

  originalWorkers = this.workers;

  ngOnInit(): void {
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
      console.log('Filter name');
      this.workers = this.workers.filter(worker=> worker.name.indexOf(values.name) !== -1)
    }
  }

  clearForm(){
    this.form.reset();
  }

}
