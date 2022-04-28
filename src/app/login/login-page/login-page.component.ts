import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from 'src/app/authentication/jwt-token.service';
import { userLoginDto } from 'src/app/users/user.model';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService, private tokenService: JwtTokenService) { }

  ngOnInit(): void {
  }

  

  login(credentials: userLoginDto){
    this.userService.login(credentials).subscribe(
      (_response: any) => {
          // Also tried _response.headers.init();
          console.log(_response.status);
          const token = _response.headers.get('X-Token');
          this.tokenService.setToken(token);
          console.log(this.tokenService.getExpiryTime());
        });
  }

}
