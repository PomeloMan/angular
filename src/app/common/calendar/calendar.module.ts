import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarContainer, CalendarController } from './calendar.directive';
import { CalendarComponent } from './calendar.component';
import { format } from 'url';

@NgModule({
    imports: [CommonModule],
    declarations: [CalendarComponent, CalendarContainer, CalendarController],
    exports: [CalendarComponent, CalendarContainer, CalendarController],
    providers: []
})
export class CalendarModule { }