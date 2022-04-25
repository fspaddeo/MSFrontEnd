import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { skillCreationDTO } from '../skills.model';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  saveChanges(skillCreationDTO: skillCreationDTO){
    console.log(skillCreationDTO);
    this.router.navigate(['/skills']);
  }
}
