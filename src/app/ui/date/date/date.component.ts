import { Component } from '@angular/core';
import { DateAdapter } from 'src/app/infraestructure/adapters/date/date.adapter';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {

  constructor(private calendar: DateAdapter) { }

  calendarGames: any

  ngOnInit(): void {
    this.getDate()
  }

  getDate() {
    this.calendar.getDate().subscribe(data => {
      this.calendarGames = data
      console.log(data, 'Date');
    })
  }

}
