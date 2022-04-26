import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
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

  nonSelectedSkills: multipleSelectorModel[] = [
    {key:1, value:'C#'},
    {key:2, value:'Python'},
    {key:3, value:'Angular'},
    {key:4, value:'.NET'},
  ]

  selectedSkills: multipleSelectorModel[] =[];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators:[Validators.required]
      }],
      dateOfBirth: '',
      skillIds:[]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    const skillIds = this.selectedSkills.map(value => value.key);
    this.form.get('skillIds')?.setValue(skillIds);
    this.onSavedChanges.emit(this.form.value);
  }

}
