import { Component, Input, OnInit } from '@angular/core';
import { Cargo } from '@shared/cargo.model';

@Component({
  selector: 'mtr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: Cargo[];

  displayedColumns: string[] = [
    'dimension_x',
    'dimension_y',
    'dimension_z',
    'dangerous',
    'stackable',
    'created_at',
    'updated_at',
  ];

  constructor() {}

  ngOnInit(): void {}
}
