import { effect, Injectable, signal } from '@angular/core';
import { UserCredentials } from '@app/shared/user.enum';
import { UserToken } from '@app/types/token.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token = signal<string | undefined>();

  constructor() {
    effect(() => {
      this.token.set(
        JSON.parse(localStorage.getItem(UserCredentials.STORAGENAME) ?? 'null')?.token,
      );
    });
  }

  tokenSave(token: UserToken) {
    localStorage.setItem(UserCredentials.STORAGENAME, JSON.stringify(token));
  }
  tokenGet(): UserToken | undefined {
    const userToken =
      JSON.parse(localStorage.getItem(UserCredentials.STORAGENAME) ?? 'null') || undefined;
    if (userToken satisfies UserToken) {
      return userToken['token'];
    }
    return userToken;
  }

  tokenRemove(): void {
    localStorage.removeItem(UserCredentials.STORAGENAME);
  }
}
