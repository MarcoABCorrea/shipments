import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { LoginRequest } from '@shared/loginRequest.model';
import { LoginResponse } from '@shared/loginResponse.model';
import { Shipment } from '@shared/shipment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private basePath: string = environment.BASE_URL;
  private loginPath: string = this.basePath + 'oauth/token';
  private logoutPath: string = this.basePath + 'oauth/signout';
  private shipmentsPath: string = this.basePath + 'shipments';

  constructor(private http: HttpClient) {}

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginPath, loginRequest);
  }

  public logout(accessToken: string): Observable<any> {
    return this.http.delete(this.logoutPath, {
      headers: this.getHeaders(accessToken),
    });
  }

  public getShipments(accessToken: string): Observable<Array<Shipment>> {
    return this.http.get<Array<Shipment>>(this.shipmentsPath, {
      headers: this.getHeaders(accessToken),
    });
  }

  public getHeaders(accessToken: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });
  }
}
