import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WindowService } from '../../service/window.sevice';

// import * as $ from 'jquery';
import * as moment from 'moment';
// import * as _ from 'underscore';
import 'clndr';

@Component({
    selector: 'clndr',
    templateUrl: './clndr.component.html',
    styleUrls: ['./clndr.component.css'],
})
export class ClndrComponent implements OnInit {

    window: any;
    options: Option = {
        daysOfTheWeek: null,
        days: null
    };

    constructor(private win: WindowService) {
        this.window = win.nativeWindow;
    }

    ngOnInit(): void {
        var daysOfTheWeek = this.options.daysOfTheWeek;
        if (!daysOfTheWeek) {
            daysOfTheWeek = [];
            for (var i = 0; i < 7; i++) {
                daysOfTheWeek.push(moment().weekday(i).format('dd'));
            }
        }
    }
}

export interface Option {
    daysOfTheWeek: any[]
    days: any[]
}