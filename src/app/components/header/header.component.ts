import { Component, Input, OnInit, OnDestroy  } from '@angular/core';
import {BookingApiService} from 'src/app/services/booking-api.service'
import {User} from 'src/app/models/user.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit,OnDestroy  {

  private userSub: Subscription;
  @Input() showLoginBtn: boolean = true;
  user:User

  constructor(private bkAPI:BookingApiService) { }

  ngOnInit() {
    this.userSub = this.bkAPI.subscribeUser( u => this.user = u )
  }

  ngOnDestroy(){
    this.userSub.unsubscribe()
  }
  disconnect(){
    console.log("disconnect")
  }

}
