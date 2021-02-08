import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { LoginRequest } from '@shared/loginRequest.model';
import { LoginResponse } from '@shared/loginResponse.model';
import { Shipment } from '@shared/shipment.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private basePath: string = environment.BASE_URL;
  private loginPath: string = this.basePath + 'oauth/token';
  private shipmentsPath: string = this.basePath + 'shipments';
  private loading = new BehaviorSubject(true);

  constructor(private http: HttpClient) {}

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginPath, loginRequest);
  }

  public getShipments(accessToken: string): Observable<Array<Shipment>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });
    return this.http.get<Array<Shipment>>(this.shipmentsPath, {
      headers,
    });
  }
}
