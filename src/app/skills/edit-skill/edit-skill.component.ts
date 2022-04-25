import { Component, OnInit } from '@angular/core';
import { skillCreationDTO } from '../skills.model';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  constructor() { }

  model: skillCreationDTO = {name: 'Angular'}

  ngOnInit(): void {
  }

  saveChanges(skillCreationDTO: skillCreationDTO){

  }

}
