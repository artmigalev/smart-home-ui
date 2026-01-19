import { computed, effect, Injectable, signal } from '@angular/core';
import { UserCredentials } from '@app/shared/user.enum';
import { User } from '@app/types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = signal<User | undefined>();

  isAuthenticated = computed(() => (this.user() ? true : false));

  constructor() {
    effect(() =>
      this.user.set(JSON.parse(localStorage.getItem(UserCredentials.STORAGENAME!) ?? 'null')),
    );
  }
}
