import { Injectable } from '@angular/core';
import { LoginResponse } from '@shared/loginResponse.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private static KEY_METRICS = 'metrics';

  public saveLoginResponse(loginResponse: LoginResponse): void {
    localStorage.removeItem(StorageService.KEY_METRICS);
    localStorage.setItem(
      StorageService.KEY_METRICS,
      JSON.stringify(loginResponse)
    );
  }

  public getToken(): string {
    const login = JSON.parse(localStorage.getItem(StorageService.KEY_METRICS));
    return login.access_token;
  }
}
