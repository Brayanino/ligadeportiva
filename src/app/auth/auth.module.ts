import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouingModule } from './auth-rouing.module';

import { ScheduleComponent } from '../ui/schedule/schedule/schedule.component';
import { DateComponent } from '../ui/date/date/date.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    AuthRouingModule 
  ]
})

export class AuthModule { }