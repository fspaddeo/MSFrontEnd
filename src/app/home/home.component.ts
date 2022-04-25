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
      birth: Date.now(),
      salary: 1000,
      birthPlace: 'Cagliari',
      image: "",
    },
    {
      name : 'Moana',
      birth: Date.now(),
      salary: 1500,
      birthPlace: 'Milano',
      image: "",
    },
    {
      name : 'Fantastic beasts',
      birth: Date.now(),
      salary: 1300,
      birthPlace: 'Napoli',
      image: "",
    }];

    this.seniorWorkers =[{
      name : 'Spiderman',
      birth: Date.now(),
      salary: 4000,
      birthPlace: 'Foggia',
      image: "",
    },
    {
      name : 'Moana',
      birth: Date.now(),
      salary: 3500,
      birthPlace: 'Torino',
      image: "",
    },
    {
      name : 'Fantastic beasts',
      birth: Date.now(),
      salary: 3300,
      birthPlace: 'Verona',
      image: "",
    }];
    
  }
  juniorWorkers!: { name: string; birth: number; salary: number; birthPlace: string; image:string; }[];
  seniorWorkers!: { name: string; birth: number; salary: number; birthPlace: string; image:string; }[];

}
