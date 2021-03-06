import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators,FormBuilder, FormGroup } from "@angular/forms";
import { BookingApiService } from 'src/app/services/booking-api.service'
import { Router } from '@angular/router'
import { getBase64, resizeBase64 } from 'base64js-es6'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private mainPictureFile = null
  private PLAT_FORM_CREATE: {[key: string]: AbstractControl} = {
    name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    mainPicture : new FormControl(null, [Validators.required])
  }

  addForm: FormGroup;
  isSubmitted  =  false;
  mainPicture = null

  constructor(private fb: FormBuilder,private bkAPI:BookingApiService,private router: Router,private  alertController: AlertController) { }

  ngOnInit() {
    this.addForm = this.fb.group(this.PLAT_FORM_CREATE);
  }

  get formControls() { return this.addForm.controls; }

  handleSubmitAction(){
    this.isSubmitted = true
    if(this.addForm.invalid)  return

    getBase64(this.mainPictureFile )
    .then(r => resizeBase64(r, 250, 250))//TODO set size in config file
    .then(r => {
      this.addForm.value.mainPicture = r
      this.bkAPI.sendPost("sportHall",this.addForm.value)
      .then( r =>  this.router.navigate(['/']))
    })
    .catch(err => {
      this.alertController.create({
        header: 'Error',
        buttons: ['ok']
      }).then(c => c.present())
    })

  }
  loadFile(f){
    this.mainPictureFile = f.target.files[0]
    this.mainPicture = URL.createObjectURL(this.mainPictureFile)
  }

}
