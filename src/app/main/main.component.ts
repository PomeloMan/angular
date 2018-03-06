import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

import * as $ from 'jquery';
import * as moment from 'moment';
import * as _ from 'underscore';
import 'clndr';

import { WindowService } from '../service/window.sevice';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    window: any;

    @HostBinding('class') componentCssClass;

    constructor(private overlayContainer: OverlayContainer, private win: WindowService) {
        console.log('Native window obj', win.nativeWindow);
        this.window = win.nativeWindow;
    }

    ngOnInit(): void {
        var a = moment().format('MMMM Do YYYY, h:mm:ss a');
        this.window._ = _;
        var thisMonth = moment().format('YYYY-MM');
        var eventArray = [
            {
                title: 'Multi-Day Event',
                endDate: thisMonth + '-14',
                startDate: thisMonth + '-10'
            }, {
                endDate: thisMonth + '-23',
                startDate: thisMonth + '-21',
                title: 'Another Multi-Day Event'
            }, {
                date: thisMonth + '-27',
                title: 'Single Day Event'
            }
        ];
        $('.cal1').clndr({
            events: eventArray,
            clickEvents: {
                click: function (target) {
                    console.log('Cal-1 clicked: ', target);
                },
                today: function () {
                    console.log('Cal-1 today');
                },
                nextMonth: function () {
                    console.log('Cal-1 next month');
                },
                previousMonth: function () {
                    console.log('Cal-1 previous month');
                },
                onMonthChange: function () {
                    console.log('Cal-1 month changed');
                },
                nextYear: function () {
                    console.log('Cal-1 next year');
                },
                previousYear: function () {
                    console.log('Cal-1 previous year');
                },
                onYearChange: function () {
                    console.log('Cal-1 year changed');
                },
                nextInterval: function () {
                    console.log('Cal-1 next interval');
                },
                previousInterval: function () {
                    console.log('Cal-1 previous interval');
                },
                onIntervalChange: function () {
                    console.log('Cal-1 interval changed');
                }
            },
            multiDayEvents: {
                singleDay: 'date',
                endDate: 'endDate',
                startDate: 'startDate'
            },
            showAdjacentMonths: true,
            adjacentDaysChangeMonth: false
        });
    }

    setTheme(theme): void {
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
    }
}