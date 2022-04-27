import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerCreationDto, WorkerDto } from '../workers.model';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private workerService: WorkersService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      alert(params['code']);
      this.code = params['code'];
    });

    this.workerService.getOne(this.code).subscribe(worker =>{
      this.worker = worker;
      console.log(this.worker);
    });
  }

  code!: number;
  worker!: WorkerDto;

  saveChanges(workerCreationDto: WorkerCreationDto){
    console.log(workerCreationDto);
  }

}
