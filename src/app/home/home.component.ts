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
      image: "",
    },
    {
      name : 'Moana',
      birth: Date.now(),
      salary: 1500,
      image: "",
    },
    {
      name : 'Fantastic beasts',
      birth: Date.now(),
      salary: 1300,
      image: "",
    }];

    this.seniorWorkers =[{
      name : 'Spiderman',
      birth: Date.now(),
      salary: 4000,
      image: "",
    },
    {
      name : 'Moana',
      birth: Date.now(),
      salary: 3500,
      image: "",
    },
    {
      name : 'Fantastic beasts',
      birth: Date.now(),
      salary: 3300,
      image: "",
    }];
    
  }
  juniorWorkers!: { name: string; birth: number; salary: number; image:string; }[];
  seniorWorkers!: { name: string; birth: number; salary: number;image:string; }[];

}
