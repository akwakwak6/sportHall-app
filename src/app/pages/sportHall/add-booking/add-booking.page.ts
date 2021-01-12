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

  private now:Date = new Date()
  //TODO default = start today 20h 
  //end = demin 06H
  // end become ( if earlier than start ) the next day of start 

  private PLAT_FORM_CREATE: {[key: string]: AbstractControl} = {
    start: new FormControl(this.now.toISOString(), [Validators.required]),
    end: new FormControl(this.now.toISOString(), [Validators.required]),
    message: new FormControl(null),
  }
  eventForm: FormGroup;
  private id

  constructor(private route: ActivatedRoute,private fb: FormBuilder,private bkAPI:BookingApiService,private router: Router) {
  }

  get formControls() { return this.eventForm.controls; }

  ngOnInit() {
    //TODO check if connnected => else go login
    this.route.params.subscribe((params: any) => {//TODO check if it is good => subscribe for params ?
      this.id = params.id
    })
    this.eventForm = this.fb.group(this.PLAT_FORM_CREATE);
  }

  handleSubmitAction(){
    //TODO check if start > today && start < end && end - start < 3d => error | else send booking
    console.log("send",this.eventForm.value)
  }

}
