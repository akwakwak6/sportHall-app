import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BookingApiService } from 'src/app/services/booking-api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  constructor(private route: ActivatedRoute,private bkAPI:BookingApiService,private  alertController: AlertController,private router: Router) { }

  event = null
  private id:string

  ngOnInit() {
  
    this.route.params.subscribe((params: any) => {
      this.id = params.id
      this.bkAPI.sendGet("sportHall/event/"+this.id).subscribe(event => {
        console.log("show ",event)
        this.event = event
      })
    })
  
  }

  confirm(c:boolean){
    this.bkAPI.sendPost(`sportHall/confirm`,{confirm:c,bookingId:this.event.id})
    .then(  _ =>{
      return this.alertController.create({
        header: c ? 'la réservation est confirmée' : 'la réservation est annulée',
        buttons: ['ok']
      }).then(c => c.present())
    })
    .then(_ => this.router.navigate(['detail/'+this.event.SportHallId]))
    .catch(  _ =>{
      this.alertController.create({
        header: c ? 'erreur pour confirmer' : 'erreur pour annuler',
        buttons: ['ok']
      }).then(c => c.present())
    })
  }

}
