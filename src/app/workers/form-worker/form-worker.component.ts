import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { workerCreationDTO } from '../workers.model';

@Component({
  selector: 'app-form-worker',
  templateUrl: './form-worker.component.html',
  styleUrls: ['./form-worker.component.css']
})
export class FormWorkerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  model!: workerCreationDTO;

  @Output()
  onSavedChanges = new EventEmitter<workerCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators:[Validators.required]
      }],
      dateOfBirth: ''
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSavedChanges.emit(this.form.value);
  }

}
