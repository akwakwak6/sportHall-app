import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {BookingApiService} from 'src/app/services/booking-api.service'
import { AbstractControl, FormControl, Validators,FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.page.html',
  styleUrls: ['./add-booking.page.scss'],
})
export class AddBookingPage implements OnInit {

  ///default input date 
  private today:Date = new Date() 
  private start:Date = new Date(new Date().setDate(this.today.getDate() + 1)) // default start = today + 1
  private end:Date = new Date(new Date().setDate(this.start.getDate() + 1)) // default end = start + 1

  private PLAT_FORM_CREATE: {[key: string]: AbstractControl} = {
    start: new FormControl(this.start.toISOString(), [Validators.required]),
    end: new FormControl(this.end.toISOString(), [Validators.required]),
    message: new FormControl(null),
    SportHallId: new FormControl(null),
  }
  eventForm: FormGroup;
  private id

  constructor(private route: ActivatedRoute,private fb: FormBuilder,private bkAPI:BookingApiService,private router: Router) {
  }

  get formControls() { return this.eventForm.controls; }

  ngOnInit() {
    //if not connected => go to login
    if(this.bkAPI.user === null){
      console.log('not connected')
      this.router.navigate(['/user/login'])
      return
    }
    this.eventForm = this.fb.group(this.PLAT_FORM_CREATE);
    this.route.params.subscribe((params: any) => {
      this.id = params.id
    })
  }

  handleSubmitAction(){
    //TODO check if start > today && start < end && end - start < 3d => error | else send booking ( it's done in API )

    this.eventForm.value.SportHallId = this.id
    console.log("send",this.eventForm.value)
    this.bkAPI.sendPost("sportHall/booking",this.eventForm.value)
    .then(_=> this.router.navigate(['/detail/'+this.id]))
    .catch( e => console.log("error ",e.error) )//TODO add alert
  }

}
