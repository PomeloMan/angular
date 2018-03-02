import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../user/user.service';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatIconModule
    ],
    declarations: [MainComponent, LoginComponent],
    providers: [UserService]
})
export class MainModule { }