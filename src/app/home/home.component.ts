import { Component, OnInit } from '@angular/core';
import { workerCreationDTO } from '../workers/workers.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.juniorWorkers =[{
      name : 'Spiderman',
      dateOfBirth: new Date(),
      birthPlace: 'Cagliari',
      image: "",
      skillIds: []
    },
    {
      name : 'Moana',
      dateOfBirth: new Date(),
      birthPlace: 'Milano',
      image: "",
      skillIds: []
    },
    {
      name : 'Fantastic beasts',
      dateOfBirth: new Date(),
      birthPlace: 'Napoli',
      image: "",
      skillIds: []
    }];

    this.seniorWorkers =[{
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
    
  }
  juniorWorkers!: workerCreationDTO[];
  seniorWorkers!: workerCreationDTO[];

}
