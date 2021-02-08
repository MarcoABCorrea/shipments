import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '@services/shipment.service';
import { StorageService } from '@services/storage.service';
import { Shipment } from '@shared/shipment.model';

@Component({
  selector: 'mtr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  shipments = [];
  loading: boolean = true;

  constructor(
    private shipmentService: ShipmentService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    const token = this.storageService.getToken();
    if (token) {
      this.getShipments(token);
    }
  }

  public getShipments(accessToken: string): void {
    this.shipmentService
      .getShipments(accessToken)
      .subscribe((shipments: Array<Shipment>) => {
        this.loading = false;
        this.shipments = shipments;
      });
  }
}
