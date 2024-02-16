import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from '../ui/schedule/schedule/schedule.component';
import { DateComponent } from '../ui/date/date/date.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'matches', component:ScheduleComponent},
      {path:'dates',component:DateComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRouingModule { }
