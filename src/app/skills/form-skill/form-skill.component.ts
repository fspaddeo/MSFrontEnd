import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { skillCreationDTO } from '../skills.model';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model!: skillCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<skillCreationDTO> = new EventEmitter<skillCreationDTO>();

  form!: FormGroup;
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }


  getErrorMessageFieldName(){
    const field = this.form.get("name");
    if (field?.hasError('required')){
      return 'Il campo Nome è obbligatorio';
    }
    if (field?.hasError('minlength')){
      return 'Il campo Nome deve essere composto da almeno 3 caratteri';
    }
    if (field?.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }
    return '';
  }

}
