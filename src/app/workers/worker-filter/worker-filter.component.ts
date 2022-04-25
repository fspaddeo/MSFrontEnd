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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
       name:'',
       birthPlace:'',
       birth:Date.now()
    })
  }

}
