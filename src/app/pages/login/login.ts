import { Component, inject, signal } from '@angular/core';
import { form, FormField, maxLength, minLength, required } from '@angular/forms/signals';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardFooter,
} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '@app/data/services/auth/auth.service';
import { UserRequest } from '@app/types/user.interface';
type LoginData = UserRequest;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormFieldModule,
    MatCardFooter,
    FormField,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export default class Login {
  serviceAuth = inject(AuthService);
  loginModel = signal<LoginData>({
    userName: '',
    password: '',
  });
  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.userName, {
      message: 'This field must be required',
    });
    required(schemaPath.password, {
      message: 'This field must be required',
    });
    minLength(schemaPath.userName, 3, { message: 'This field must >= 3' });
    maxLength(schemaPath.userName, 10, { message: 'This field must <= 10' });
    minLength(schemaPath.password, 8, { message: 'This field must >= 8' });
    maxLength(schemaPath.password, 16, { message: 'This field must <= 16' });
  });

  async submitDataForm() {
    const loginData = this.loginForm().value();

    this.serviceAuth.login(loginData);
  }
}
