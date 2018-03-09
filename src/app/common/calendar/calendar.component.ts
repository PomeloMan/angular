import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WindowService } from '../../service/window.sevice';

// import * as $ from 'jquery';
import * as moment from 'moment';
// import * as _ from 'underscore';
// import 'clndr';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {

    window: any;
    options: CalendarOption = {
        daysOfTheWeek: moment.weekdaysMin(),
        days: null
    };

    constructor(private win: WindowService) {
        this.window = win.nativeWindow;
    }

    ngOnInit(): void {
    }
}

export interface CalendarOption {
    daysOfTheWeek: any[]
    days: any[]
}