import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userLoginDto } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiLoginUrl = environment.apiURL + '/login'

  login(credentials: userLoginDto): Observable<HttpResponse<Object>>{    
    //this.http.post<HttpResponse<Object>>(this.apiLoginUrl, credentials, {observe: "response"}).subscribe(res => console.log(res.headers.get('X-Token')));
    return this.http.post(this.apiLoginUrl, credentials, {observe: "response"});
  }

  
}
