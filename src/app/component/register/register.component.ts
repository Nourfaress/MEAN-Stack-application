import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: any;
  email: any;
  username: any;
  password: any;


  constructor(private validateService: ValidateService,
        private flashMessages: FlashMessagesService,
        private authService: AuthService,
        private router: Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(): void{
  const user = {
    name: this.name,
    email: this.email,
    username: this.username,
    password: this.password
  }

  // Required Fields
  if(!this.validateService.validateRegister(user)){
    return this.flashMessages.show('fill all fields', {cssClass: 'alert-danger', timeout: 3000});
  }

  // Validate Email
  if(!this.validateService.validateEmail(user.email)){
    return this.flashMessages.show('use valid email', {cssClass: 'alert-danger', timeout: 3000});
  }

  // Register user
  this.authService.registerUser(user).subscribe(data => {
    if(data.success) {
      this.flashMessages.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/login']);
    } else {
      this.flashMessages.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/register']);
    }
  });
  }
}
