import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, ErrorDialogComponent],
  imports: [MatToolbarModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
