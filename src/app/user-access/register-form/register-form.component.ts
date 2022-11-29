import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/Services/userservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  formReg: FormGroup;

  constructor(
    private userService: UserservicesService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    this.userService
      .registerNewUser(this.formReg.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
