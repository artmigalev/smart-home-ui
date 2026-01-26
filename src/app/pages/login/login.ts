import { Component, computed, inject, signal } from '@angular/core';
import { form, FormField, maxLength, minLength, required } from '@angular/forms/signals';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardFooter,
} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '@app/data/services/auth/auth.service';
import { UserRequest } from '@app/types/user.interface';
interface LoginData extends UserRequest {
  serverError: undefined | string;
  success: string | undefined;
}

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
    MatInputModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export default class Login {
  private router = inject(Router);
  serviceAuth = inject(AuthService);
  loginModel = signal<LoginData>({
    userName: '',
    password: '',
    serverError: undefined,
    success: undefined,
  });

  loginError = computed(() => this.loginModel().serverError);
  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.userName, {
      message: 'This field must be required',
    });
    required(schemaPath.password, {
      message: 'This field must be required',
    });
    minLength(schemaPath.userName, 3, { message: 'This field must >= 3' });
    maxLength(schemaPath.userName, 10, { message: 'This field must <= 10' });
    minLength(schemaPath.password, 2, { message: 'This field must >= 8' });
    maxLength(schemaPath.password, 16, { message: 'This field must <= 16' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    this.serviceAuth.login(this.loginForm().value()).subscribe({
      error: (error: Error) =>
        this.loginModel.update((previous) => ({ ...previous, serverError: error.message })),
      complete: () => {
        this.loginForm().reset();
        console.log('reset');

        this.router.navigate(['']);
      },
    });
  }
}
