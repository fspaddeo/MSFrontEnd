import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userLoginDto } from 'src/app/users/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Output()
  onSubmit = new EventEmitter<userLoginDto>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username :['',{
        validators:[Validators.required]
      }],
      password :['',{
        validators:[Validators.required]
      }]
    });
  }


  submit(){
    this.onSubmit.emit(this.form.value);
  }

}
