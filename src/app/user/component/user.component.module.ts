import { ListUsersComponent } from './list-users/list-users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserServiceModule } from '../service/user.service.module';
import { MaterialModule } from '../../common/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ListUsersComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        UserServiceModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ListUsersComponent,
    ]
})

export class UserComponentModule { }
