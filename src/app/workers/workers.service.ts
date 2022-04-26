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

  private apiUrl = environment.apiURL + '/workers'

  getAll(): Observable<WorkerDto[]>{
    return this.http.get<WorkerDto[]>(this.apiUrl);
  }
}
