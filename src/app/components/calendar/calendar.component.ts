import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit,AfterViewInit {

  calendarOptions :CalendarOptions = {}
  calendarinit:CalendarOptions = {
      height: "auto",
      contentHeight: "auto",
      fixedWeekCount : false,
      editable: false,
      headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      },
      eventClick: i => this.handleeventClick(i),
      dateClick : i => this.handleDateClick(i),

    }

  constructor() { }

  ngOnInit() {
    console.log("init calendar comp")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit calendar comp")
    this.calendarOptions = this.calendarinit
  }

  handleeventClick(s: any){
    console.log("event data",s)
  }
  handleDateClick(s: any){
    console.log("date data",s)
  }

}
