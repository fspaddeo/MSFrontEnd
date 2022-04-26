import { Component, OnInit } from '@angular/core';
import { WorkerCreationDto, WorkerDto } from '../workers/workers.model';
import { WorkersService } from '../workers/workers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private workersService: WorkersService){}

  workers!: WorkerDto[];

  ngOnInit(): void {
    this.workersService.getAll().subscribe(workers =>{
      this.workers = workers;
    })
  }


}
