import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  constructor() { }

  @Input()
  workers!: { name: string; birth: number; salary: number; image: string; }[];

  ngOnInit(): void {
  }

  remove(index: number){
    this.workers.splice(index, 1);
  }

}
