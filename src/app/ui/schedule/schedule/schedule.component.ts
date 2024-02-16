import { Component } from '@angular/core';
import { DateAdapter } from 'src/app/infraestructure/adapters/date/date.adapter';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  constructor(private calendar: DateAdapter) { }

  matches: any

  ngOnInit(): void {
    this.getGame();
  }

  getGame() {
    this.calendar.getGame().subscribe(data => {
      this.matches = data
    })
  }

}
