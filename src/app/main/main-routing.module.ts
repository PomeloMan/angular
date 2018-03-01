import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'main', component: MainComponent,
            children: [
                { path: 'dashboard', component: LoginComponent }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class MainRoutingModule { }