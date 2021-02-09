import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '@services/shipment.service';
import { StorageService } from '@services/storage.service';
import { Shipment } from '@shared/shipment.model';
import moment from 'moment';

@Component({
  selector: 'mtr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allShipments: Shipment[] = [];
  shipments: Shipment[] = [];
  loading: boolean = true;
  formatYYYYMMDD = 'YYYY-MM-DD';
  filters = [
    { value: 1, viewValue: 'Last 5' },
    { value: 2, viewValue: 'Yesterday' },
    { value: 3, viewValue: 'Last week' },
    { value: 4, viewValue: 'Last Month' },
  ];

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

  filter(value: number): void {
    switch (value) {
      case 1:
        this.getLast5Shipments();
        break;
      case 2:
        this.getYesterdayShipments();
        break;
      case 3:
        this.getLastWeekShipments();
        break;
      case 4:
        this.getLastMonthShipments();
        break;
    }
  }

  getLast5Shipments(): void {
    this.shipments = this.allShipments.slice(0, 5);
  }

  getYesterdayShipments(): void {
    const yesterday = moment().subtract(1, 'days').format(this.formatYYYYMMDD);
    this.shipments = this.allShipments.filter(
      (ship) => ship.planned_eta === yesterday
    );
  }

  getLastWeekShipments(): void {
    const week = moment().subtract(8, 'days');
    const tomorrow = moment().add(1, 'days');
    this.shipments = this.allShipments.filter((ship) => {
      const eta = moment(ship.planned_eta);
      return eta.isAfter(week) && eta.isBefore(tomorrow);
    });
  }

  getLastMonthShipments(): void {
    const month = moment().subtract(1, 'month');
    const today = moment();

    this.shipments = this.allShipments.filter((ship) => {
      const eta = moment(ship.planned_eta);
      return eta.isAfter(month) && eta.isBefore(today);
    });
  }

  getShipments(accessToken: string): void {
    this.shipmentService
      .getShipments(accessToken)
      .subscribe((shipments: Array<Shipment>) => {
        this.loading = false;
        this.allShipments = shipments.sort((left, right) => {
          return moment(right.planned_eta).diff(moment(left.planned_eta));
        });

        this.getLast5Shipments();
      });
  }
}
