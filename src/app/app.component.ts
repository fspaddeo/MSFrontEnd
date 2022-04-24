import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
  title = 'MSFrontEnd';

  handleRating(rate: number){
    alert(`User selected ${rate}`);
  }
  
}
