import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }]
    });
  }

  saveChanges(){
    this.router.navigate(['/skills'])
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
