import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Endpoints_GET, Endpoints_POST } from '@app/shared/endpoints.enum';
import { UserToken } from '@app/types/token.interface';
import { UserProfileResponse, UserRequest } from '@app/types/user.interface';
import { Observable, of, take, tap } from 'rxjs';
import { TokenService } from '../token/token.service';

// const userTest = {
//   userName: 'Dale',
//   password: 'consequat',
// };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  serviceToken = inject(TokenService);
  token = computed(() => this.serviceToken.token);

  user = rxResource({
    params: this.token(),
    stream: ({ params }) => (params ? this.getUser() : of()),
  });

  getUser(): Observable<UserProfileResponse | undefined> {
    return this.http.get<UserProfileResponse>(Endpoints_GET.PROFILE);
  }
  login(data: UserRequest): Observable<Error | UserToken> {
    return this.http.post<UserToken>(Endpoints_POST.LOGIN, data).pipe(
      take(1),
      tap((token) => this.serviceToken.tokenSave(token)),
    );
  }

  logout() {
    this.serviceToken.tokenRemove();
    this.router.navigate(['/login']);
  }

  isAuthenticated = computed(() => {
    if (this.user.value()) {
      return true;
    }
    return false;
  });
}
