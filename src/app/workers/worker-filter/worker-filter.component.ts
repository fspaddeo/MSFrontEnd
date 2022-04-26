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
    birthPlace: 'Cagliari',
    image: "",
    skillIds: []
  },
  {
    name : 'Moana',
    dateOfBirth: new Date(),
    skillIds: [],
    birthPlace: 'Milano',
    image: "",
  },
  {
    name : 'Fantastic beasts',
    dateOfBirth: new Date(),
    birthPlace: 'Napoli',
    image: "",
    skillIds: []
  },
  {
    name : 'Spiderman',
    dateOfBirth: new Date(),
    birthPlace: 'Foggia',
    image: "",
    skillIds: []
  },
  {
    name : 'Moana',
    dateOfBirth: new Date(),
    birthPlace: 'Torino',
    image: "",
    skillIds: []
  },
  {
    name : 'Fantastic beasts',
    dateOfBirth: new Date(),
    birthPlace: 'Verona',
    image: "",
    skillIds: []
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
