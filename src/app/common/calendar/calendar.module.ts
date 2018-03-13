import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatCalendar, MatCalendarBody, MatCalendarCell, MatYearView, ɵa31, MatMonthView } from '@angular/material/datepicker';
import { CalendarComponent } from './calendar.component';
import { format } from 'url';

@NgModule({
    imports: [
        CommonModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatGridListModule,
        MatDividerModule,
        MatDatepickerModule
    ],
    declarations: [CalendarComponent],
    exports: [CalendarComponent],
    providers: []
})
export class CalendarModule { }