import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

import { WindowService } from '../service/window.sevice';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    @HostBinding('class') componentCssClass;

    constructor(private overlayContainer: OverlayContainer) {
    }

    ngOnInit(): void {
    }

    setTheme(theme): void {
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
    }
}