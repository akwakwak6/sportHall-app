import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {BookingApiService} from 'src/app/services/booking-api.service'
import {SportHall} from 'src/app/models/sportHall.model'
import { CalendarOptions } from '@fullcalendar/angular'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  sportHall:SportHall

  constructor(private route: ActivatedRoute,private bkAPI:BookingApiService,private router: Router) { }
  calendarOptions : CalendarOptions

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      this.bkAPI.sendGet("sportHall/"+params.id).subscribe(response => {
        this.sportHall = response
        const booking = []
        this.initializeCalendarOptions()
        this.sportHall.Bookings.forEach(b => {
          console.log("event => ",b)
          booking.push({ 
              title: b.message? b.message : "private" ,
              start: b.start,
              end: b.end,
              backgroundColor: b.payed ? '#11aa11' : '#e08c48'
            })
        });
        this.calendarOptions.events = booking
      })
    });

  }

  initializeCalendarOptions(){

    this.calendarOptions = {
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
      eventClick: i => this.handleeventClick(i),//TODO add event if only modo
      dateClick : i => this.handleDateClick(i),

    }
  }

  handleeventClick(s: any){
    console.log("click event => ",s.event.title,s.event.start)
    //if(this.bkAPI.user &&  this.bkAPI.user.Roles.find(r => r.name === "modo"))//TODO put the if in calendarOptions
      this.router.navigate(['/event'])

  }
  handleDateClick(s: any){
    console.log("click date => ",s.dateStr)
  }

}
