import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators,FormBuilder, FormGroup } from "@angular/forms";
import { BookingApiService } from 'src/app/services/booking-api.service'
import { Router } from '@angular/router'

//TODO plan
//register
//schémas DB
//all TODO
//navigation auth-guard

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private REGISTER_FORM: {[key: string]: AbstractControl} = {//TODO remove default input
    name: new FormControl("user", [Validators.required,Validators.minLength(5)]),
    mail: new FormControl("user@com", [Validators.required,Validators.email]),
    password: new FormControl("user", [Validators.required])
  }
  registerForm: FormGroup;
  isSubmitted  =  false;

  constructor(private fb: FormBuilder,private bkAPI:BookingApiService,private router: Router) { }//TODO all register

  ngOnInit() {
    this.registerForm = this.fb.group(this.REGISTER_FORM);
  }

  get formControls() { return this.registerForm.controls; }

  handleSubmitAction(){
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.log("send",this.registerForm.value)
    this.isSubmitted = false;
    
    this.bkAPI.register(this.registerForm.value)
    .then(_=>{
      this.router.navigate(['/'])//TODO if route in para go to this rout ( add event => login => add event page ) else home
    })
    .catch(e=>{
      console.log('error',e)//TODO add alert
    })
    
    this.registerForm.reset()



  }

}
