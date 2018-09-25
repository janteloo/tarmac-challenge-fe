
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentModule } from './component/user.component.module';
import { UserServiceModule } from './service/user.service.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        UserComponentModule,
        UserServiceModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        UserComponentModule,
        UserServiceModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: []
})

export class UserModule { }
