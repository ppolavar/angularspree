import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';
import { HumanizePipe } from '../core/pipes/humanize.pipe';

// components
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
// imports
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    // components
    LoadingIndicatorComponent,
    NotificationComponent,
    // pipes
    KeysPipe,
    HumanizePipe
  ],
  exports: [
    // components
    LoadingIndicatorComponent,
    NotificationComponent,
    // modules
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    // pipes
    KeysPipe,
    HumanizePipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DropdownModule.forRoot()
  ]
})
export class SharedModule {}
