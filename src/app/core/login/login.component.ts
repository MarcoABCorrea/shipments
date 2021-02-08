import { Component, EventEmitter, Output } from '@angular/core';
import { ShipmentService } from '@services/shipment.service';
import { StorageService } from '@services/storage.service';
import { LoginRequest } from '@shared/loginRequest.model';
import { LoginResponse } from '@shared/loginResponse.model';

@Component({
  selector: 'mtr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() onLoginSuccessful = new EventEmitter();
  data = new LoginRequest();

  constructor(
    private shipmentService: ShipmentService,
    private storageService: StorageService
  ) {}

  onLogin() {
    this.shipmentService
      .login(this.data)
      .subscribe((loginResponse: LoginResponse) => {
        this.storageService.saveLoginResponse(loginResponse);
        this.onLoginSuccessful.emit();
      });
  }
}
