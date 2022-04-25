import { Component, OnInit } from '@angular/core';

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
      salary: 1000,
      birthPlace: 'Cagliari',
      image: "",
    },
    {
      name : 'Moana',
      dateOfBirth: new Date(),
      salary: 1500,
      birthPlace: 'Milano',
      image: "",
    },
    {
      name : 'Fantastic beasts',
      dateOfBirth: new Date(),
      salary: 1300,
      birthPlace: 'Napoli',
      image: "",
    }];

    this.seniorWorkers =[{
      name : 'Spiderman',
      dateOfBirth: new Date(),
      salary: 4000,
      birthPlace: 'Foggia',
      image: "",
    },
    {
      name : 'Moana',
      dateOfBirth: new Date(),
      salary: 3500,
      birthPlace: 'Torino',
      image: "",
    },
    {
      name : 'Fantastic beasts',
      dateOfBirth: new Date(),
      salary: 3300,
      birthPlace: 'Verona',
      image: "",
    }];
    
  }
  juniorWorkers!: { name: string; dateOfBirth: Date; salary: number; birthPlace: string; image:string; }[];
  seniorWorkers!: { name: string; dateOfBirth: Date; salary: number; birthPlace: string; image:string; }[];

}
