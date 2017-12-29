import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { DatePickerModule } from '@syncfusion/ej2-ng-calendars';
import { AppComponent } from './app.component';
import { ej2ButtonComponent } from './button.component';
import { ej2datepickerComponent } from './datepicker.component'


@NgModule({
  imports: [
    BrowserModule,
    ButtonModule,
    DatePickerModule
  ],
  declarations: [AppComponent, ej2ButtonComponent, ej2datepickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
