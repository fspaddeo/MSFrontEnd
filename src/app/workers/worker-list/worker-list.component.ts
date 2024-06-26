import { Component, Input, OnInit } from '@angular/core';
import { WorkerCreationDto } from '../workers.model';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  constructor() { }

  @Input()
  workers!: WorkerCreationDto[];

  ngOnInit(): void {
  }

  remove(index: number){
    this.workers.splice(index, 1);
  }

}
