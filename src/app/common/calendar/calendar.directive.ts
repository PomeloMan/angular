import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[calendar-controller]'
})

export class CalendarController {

    constructor(private el: ElementRef) { }

    @Input() defaultColor: string;

}

@Directive({
    selector: '[calendar-container]'
})

export class CalendarContainer {

    constructor(private el: ElementRef) { }

    @Input() defaultColor: string;

}