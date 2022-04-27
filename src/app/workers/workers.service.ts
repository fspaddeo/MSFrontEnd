import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkerDto } from './workers.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http: HttpClient) { }

  private apiWorkersUrl = environment.apiURL + '/workers'
  private apiWorkerUrl = environment.apiURL + '/worker'

  getAll(): Observable<WorkerDto[]>{
    return this.http.get<WorkerDto[]>(this.apiWorkersUrl);
  }

  getOne(code: number): Observable<WorkerDto>{
    return this.http.get<WorkerDto>(this.apiWorkerUrl +`/${code}`);
  }
}
