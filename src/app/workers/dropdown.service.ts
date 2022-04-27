import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dropdownField } from './dropdownFields.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  private apiUniversitiesUrl = environment.apiURL + '/universities'
  private apiDropdownUrl = environment.apiURL + '/dropdown'

  

  getAllUniversities(): Observable<string[]>{
    return this.http.get<string[]>(this.apiUniversitiesUrl);
  }
  getAllFields(): Observable<dropdownField>{
    return this.http.get<dropdownField>(this.apiDropdownUrl);
  }
}
