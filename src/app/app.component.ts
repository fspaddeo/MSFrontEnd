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
      salary: 1000
    },
    {
      name : 'Moana',
      birth: Date.now(),
      salary: 1500
    },
    {
      name : 'Fantastic beasts',
      birth: Date.now(),
      salary: 1300
    }];

    /*this.seniorWorkers =[{
      name : 'Spiderman',
      birth: Date.now(),
      salary: 4000
    },
    {
      name : 'Moana',
      birth: Date.now(),
      salary: 3500
    },
    {
      name : 'Fantastic beasts',
      birth: Date.now(),
      salary: 3300
    }];*/
    
  }
  juniorWorkers!: { name: string; birth: number; salary: number; }[];
  seniorWorkers!: { name: string; birth: number; salary: number; }[];
  title = 'MSFrontEnd';
  
}
