import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {BookingApiService} from 'src/app/services/booking-api.service'
import {SportHall,getSportHall} from 'src/app/models/sportHall.model'
import { CalendarOptions } from '@fullcalendar/angular'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  sportHall:SportHall
  calendarOptions:CalendarOptions = {}
  initCalendar:CalendarOptions = {
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

  constructor(private route: ActivatedRoute,private bkAPI:BookingApiService) { }


  ngOnInit() {


    this.route.params.subscribe((params: any) => {
      this.bkAPI.sendGet("sportHall/"+params.id).subscribe(response => {
        console.log("sport hall ")
        this.sportHall = response
        const booking = []
        this.calendarOptions = this.initCalendar
        this.sportHall.Bookings.forEach(b => {
          booking.push({ 
              title: b.message? b.message : "private" ,
              start: b.start,
              end: b.end,
            })
        });
        this.calendarOptions.events = booking
      })
    });

  }

  handleeventClick(s: any){
    console.log("event data",s)
  }
  handleDateClick(s: any){
    console.log("date data",s)
  }

}
