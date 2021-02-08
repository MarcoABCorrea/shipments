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
  private shipmentsPath: string = this.basePath + 'shipments';

  constructor(private http: HttpClient) {}

  public login(): Observable<LoginResponse> {
    const params: LoginRequest = {
      grant_type: 'password',
      email: 'jane@itsmycargo.test',
      password: 'hellocargo',
    };

    return this.http.post<LoginResponse>(this.loginPath, params);
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
