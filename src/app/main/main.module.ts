import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [DashboardComponent],
  imports: [ComponentsModule],
  exports: [DashboardComponent],
})
export class MainModule {}
