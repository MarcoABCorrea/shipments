import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import shipmentsResponse from '@mockData/getShipmentsResponse.json';
import { ShipmentService } from '@services/shipment.service';
import { StorageService } from '@services/storage.service';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let storageService: StorageService;
  let shipmentService: ShipmentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DashboardComponent],
      providers: [
        {
          provide: StorageService,
          useValue: {
            getToken: () => '12345',
          },
        },
        {
          provide: ShipmentService,
          useValue: {
            getShipments: () => of(shipmentsResponse),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    storageService = TestBed.inject(StorageService);
    shipmentService = TestBed.inject(ShipmentService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component, 'getShipments').and.callThrough();
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.getShipments).toHaveBeenCalled();
  });

  describe('#filter()', () => {
    it('should call the getLast5Shipments filter', () => {
      spyOn(component, 'getLast5Shipments').and.callThrough();
      component.filter(1);
      expect(component.getLast5Shipments).toHaveBeenCalled();
    });
    it('should call the getYesterdayShipments filter', () => {
      spyOn(component, 'getYesterdayShipments').and.callThrough();
      component.filter(2);
      expect(component.getYesterdayShipments).toHaveBeenCalled();
    });
    it('should call the getLastWeekShipments filter', () => {
      spyOn(component, 'getLastWeekShipments').and.callThrough();
      component.filter(3);
      expect(component.getLastWeekShipments).toHaveBeenCalled();
    });
    it('should call the getLastMonthShipments filter', () => {
      spyOn(component, 'getLastMonthShipments').and.callThrough();
      component.filter(4);
      expect(component.getLastMonthShipments).toHaveBeenCalled();
    });
  });
});
