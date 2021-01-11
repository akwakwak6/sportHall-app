import { Component, OnInit } from '@angular/core';
import {BookingApiService} from 'src/app/services/booking-api.service'
import {SportHall} from 'src/app/models/sportHall.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  sportHallList:SportHall = null
  

  constructor(private bkAPI:BookingApiService) { }

  ngOnInit() {
    this.bkAPI.sendGet("sportHall")
    .subscribe(l => this.sportHallList=l)


  }

}
