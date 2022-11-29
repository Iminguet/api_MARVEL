import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/Services/userservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  formLogin: FormGroup;

  constructor(
    private userService: UserservicesService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    this.userService
      .login(this.formLogin.value)
      .then((Response) => {
        console.log(Response);
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }
  onClick() {
    this.userService.loginWithGoogle().then((response) => {
      console.log(response);
      this.router.navigate(['/home']).catch((error) => console.log(error));
    });
  }
}
