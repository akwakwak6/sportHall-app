import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators,FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private PLAT_FORM_CREATE: {[key: string]: AbstractControl} = {
    name: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  }
  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private fb: FormBuilder) { }

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
  }
}