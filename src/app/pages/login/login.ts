import { Component } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardFooter,
} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserCredentials } from '@app/shared/user.enum';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormFieldModule,
    MatInputModule,
    MatCardFooter,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export default class Login {
  userAvtorizeted() {
    localStorage.setItem(UserCredentials.STORAGENAME, '{}');
  }
}
