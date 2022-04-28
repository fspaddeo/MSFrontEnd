import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor() { 
    const token = localStorage.getItem('token');
    if(token){
      this.setToken(token);
      if(this.isTokenExpired()){
        localStorage.removeItem('token');
        this.jwtToken = '';
        alert('Sessione scaduta. Rifare il login.')
      }
      console.log(`Il token è ${this.jwtToken}`);
    }

  }

  jwtToken!: string;
  decodedToken!: { [key: string]: string };

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
      localStorage.setItem('token', this.jwtToken);
    }
  }

  getToken(): string{
    if(!this.isTokenExpired()){
      return this.jwtToken;
    }
    return '';
  }

  decodeToken() {
    if (this.jwtToken) {
      
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwt_decode(this.jwtToken);
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  isTokenExpired(): boolean {
    const expiryTime = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * parseInt(expiryTime)) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}
