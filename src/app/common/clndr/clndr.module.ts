import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClndrComponent } from './clndr.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ClndrComponent],
    exports: [ClndrComponent],
    providers: []
})
export class ClndrModule { }