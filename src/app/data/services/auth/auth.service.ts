import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Endpoints_GET } from '@app/shared/endpoints.enum';
import { UserToken } from '@app/types/token.interface';
import { UserProfileResponse } from '@app/types/user.interface';
import { Observable, take } from 'rxjs';
import { TokenService } from '../token/token.service';

const userTest = {
  userName: 'Dale',
  password: 'consequat',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  serviceToken = inject(TokenService);
  userId = this.serviceToken.token();

  user = rxResource({
    params: () => ({ id: this.userId }),
    stream: ({ params }) => params && this.getUser(),
  });

  getUser(): Observable<UserProfileResponse> {
    return this.http.get<UserProfileResponse>(Endpoints_GET.PROFILE);
  }

  loginUser() {
    const loginEndpoint = '/api/user/login';
    this.http
      .post<UserToken>(loginEndpoint, userTest)
      .pipe(take(1))
      .subscribe({
        next: (t) => this.serviceToken.tokenSave(t),
        error: (error: HttpErrorResponse) => {
          console.error(error);
          if (error.status === 401) {
            this.serviceToken.tokenRemove();
            this.router.navigate(['/login'], { skipLocationChange: true });
          }
          console.error(error);
          return;
        },
        complete: () => {
          console.log('complete');
          this.router.navigate(['/'], { skipLocationChange: true });
        },
      });
  }

  isAuthenticated = computed(() => (this.user.value() ? true : false));
}
