import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    options: FormGroup;
    showFiller = false;

    constructor(fb: FormBuilder) {
        this.options = fb.group({
            'fixed': false,
            'top': 0,
            'bottom': 0,
        });
    }

    ngOnInit(): void {
        this.showFiller = false;
    }

}