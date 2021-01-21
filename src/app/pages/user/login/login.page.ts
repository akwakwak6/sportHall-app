import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators,FormBuilder, FormGroup } from "@angular/forms";
import { BookingApiService } from 'src/app/services/booking-api.service'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private LOGIN_FORM: {[key: string]: AbstractControl} = {//TODO remove default name & pwd
    mail: new FormControl("admin@com", [Validators.required]),
    password: new FormControl("admin", [Validators.required])
  }
  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private fb: FormBuilder,private bkAPI:BookingApiService,private router: Router,private  alertController: AlertController) { }

  ngOnInit() {
    this.loginForm = this.fb.group(this.LOGIN_FORM);
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
      this.alertController.create({
        header: 'Login error',
        buttons: ['ok']
      }).then(c => c.present())
    })
    this.loginForm.reset()
  }

  goToRegister(){
    this.router.navigate(['/user/register'])
  }
}
