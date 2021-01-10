import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  /*calendarOptions: CalendarOptions  = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2021-01-02' },
      { title: 'event 2', date: '2021-01-02' },
      { title: 'event 3', date: '2021-01-02' },
      { title: 'event 4', date: '2021-01-02' },
      { title: 'event 5', date: '2021-01-02' },
      { title: 'event 6', date: '2021-01-02' }
    ]
  };*/

  

  constructor() { }

  ngOnInit() {

  }

  /*handleDateClick(s: any){
    console.log("click",s)
  }*/

}
