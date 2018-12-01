import {ModuleWithProviders, NgModule} from '@angular/core';
import { IntlTelInputComponent } from './intl-tel-input.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';
import {IntlTelInputService} from './intl-tel-input.service';

@NgModule({
  declarations: [IntlTelInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule
  ],
  exports: [IntlTelInputComponent]
})
export class IntlTelInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IntlTelInputModule,
      providers: [IntlTelInputService]
    };
  }
}
