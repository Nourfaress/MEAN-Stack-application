import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  errMsg: any;
  errSwitch = false;


  constructor(private authService: AuthService,
        private router: Router,
        private flashMessages: FlashMessagesService
        ) { }

  ngOnInit(): void {
  }

  onLoginSubmit(form: { value: { username: string; password: any; }; }){
    const user = {
      username: form.value.username.toLowerCase(),
      password: form.value.password
    };

  this.authService.authenticateUser(user).subscribe((data: any) => {
    if(data.success) {
      this.authService.storeUserData(data.token, data.user);
      this.flashMessages.show('you are now logged in',
        {cssClass: 'alert-success', timeout: 5000 });
      this.router.navigate(['dashboard']);
    } else {
      this.flashMessages.show(data.msg,
        {cssClass: 'alert-danger', timeout: 5000 });
      this.router.navigate(['login']);
    }
    });
  }
}
