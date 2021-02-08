import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    ComponentsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  exports: [DashboardComponent],
})
export class MainModule {}
