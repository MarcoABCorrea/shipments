import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '@services/shipment.service';
import { LoginResponse } from '@shared/loginResponse.model';
import { Shipment } from '@shared/shipment.model';

@Component({
  selector: 'mtr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  shipments = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {
    this.shipmentService.login().subscribe((loginResponse: LoginResponse) => {
      this.getShipments(loginResponse.access_token);
    });
  }

  public getShipments(accessToken: string): void {
    this.shipmentService
      .getShipments(accessToken)
      .subscribe((shipments: Array<Shipment>) => (this.shipments = shipments));
  }
}
