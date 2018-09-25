import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user-service.service';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        BrowserModule,
    ],
    providers: [
        UserService
    ]
})

export class UserServiceModule { }
