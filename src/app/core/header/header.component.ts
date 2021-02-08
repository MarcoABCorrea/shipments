import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShipmentService } from '@services/shipment.service';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'mtr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onLogoutSuccessful = new EventEmitter();

  constructor(
    private shipmentService: ShipmentService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  logout() {
    const token = this.storageService.getToken();
    this.shipmentService.logout(token).subscribe(() => {
      localStorage.clear();
      this.onLogoutSuccessful.emit();
    });
  }
}
