import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { PipesModule } from '../common/pipes/pipes.module';
import { AccordionComponent } from './accordion/accordion.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [AccordionComponent, TableComponent],
  imports: [MatExpansionModule, BrowserModule, MatTableModule, PipesModule],
  exports: [AccordionComponent, TableComponent],
})
export class ComponentsModule {}
