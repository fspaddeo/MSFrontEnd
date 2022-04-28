import { Component, OnInit } from '@angular/core';
import { userLoginDto } from 'src/app/users/user.model';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(credentials: userLoginDto){
    this.userService.login(credentials).subscribe(
      (_response: any) => {
          // Also tried _response.headers.init();
          console.log(_response.status);
          const header = _response.headers.get('X-Token');
          console.log(header);
        });
    
    //https://www.syncfusion.com/blogs/post/best-practices-for-jwt-authentication-in-angular-apps.aspx
    //https://stackoverflow.com/questions/69211872/best-way-to-store-auth-token-in-angular-app
  }

}
