import { Component, Input, OnInit } from '@angular/core';
import { Shipment } from '@shared/shipment.model';

@Component({
  selector: 'mtr-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() data: Array<Shipment>;

  constructor() {}

  ngOnInit(): void {}
}
