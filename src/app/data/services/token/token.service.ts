import { Injectable, signal } from '@angular/core';
import { UserCredentials } from '@app/shared/user.enum';
import { UserToken } from '@app/types/token.interface';
import { filter, fromEvent, map } from 'rxjs';

type StorageToken = string | undefined;

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  readonly storageEvent$ = fromEvent<StorageEvent>(globalThis, 'storage').pipe(
    filter((event) => event.storageArea === localStorage),
    map((event) => this.changeStorage(event)),
  );

  token = signal<StorageToken>();

  constructor() {
    const token = this.tokenGet();
    if (token) {
      this.token.set(this.tokenGet()?.token);
    }
    this.setUpListener();
  }
  setUpListener() {
    this.storageEvent$.subscribe((event) => {
      console.log(event);
      this.token.set(event);
    });
  }
  changeStorage(event: StorageEvent): StorageToken {
    if (event.key === UserCredentials.STORAGENAME && event.newValue) {
      return JSON.parse(event.newValue);
    }
    return;
  }

  tokenSave(token: UserToken) {
    localStorage.setItem(UserCredentials.STORAGENAME, JSON.stringify(token));
  }
  tokenGet(): UserToken | undefined {
    const userToken = localStorage.getItem(UserCredentials.STORAGENAME);

    return userToken ? JSON.parse(userToken) : undefined;
  }

  tokenRemove(): void {
    localStorage.removeItem(UserCredentials.STORAGENAME);
  }
}
