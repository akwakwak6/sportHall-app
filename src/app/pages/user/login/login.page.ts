import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators,FormBuilder, FormGroup } from "@angular/forms";
import { BookingApiService } from 'src/app/services/booking-api.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private PLAT_FORM_CREATE: {[key: string]: AbstractControl} = {//TODO remove default name & pwd => change labell name & msg error
    mail: new FormControl("admin@com", [Validators.required]),
    password: new FormControl("admin", [Validators.required])
  }
  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private fb: FormBuilder,private bkAPI:BookingApiService,private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group(this.PLAT_FORM_CREATE);
  }

  get formControls() { return this.loginForm.controls; }

  handleSubmitAction(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    console.log("send",this.loginForm.value)
    this.isSubmitted = false;
    this.bkAPI.login(this.loginForm.value)
    .then(_=>{
      this.router.navigate(['/'])//TODO if route in para go to this rout ( add event => login => add event page ) else home
    })
    .catch(e=>{
      console.log('error',e)//TODO add alert
    })
    this.loginForm.reset()


  }
}
