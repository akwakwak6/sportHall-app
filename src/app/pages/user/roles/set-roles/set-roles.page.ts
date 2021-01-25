import { Component, OnInit } from '@angular/core';
import { BookingApiService } from 'src/app/services/booking-api.service'


@Component({
  selector: 'app-set-roles',
  templateUrl: './set-roles.page.html',
  styleUrls: ['./set-roles.page.scss'],
})
export class SetRolesPage implements OnInit {

  private roleId = { admin:1 , modo:2 } //TODO get object from API { name:id }
  users = [] 

  constructor(private bkAPI:BookingApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    this.bkAPI.sendGet("user").subscribe( users => {
      this.users = []
      users.forEach(u => {
        this.users.push( {roles:this.initRoles(u),user:u})
      });
      console.log(this.users)
    })
  }

  changeRole(position,role){
    console.log("send ",this.users[position].roles,role)

    this.bkAPI.sendPost("user/role",{roleId:this.roleId[role],userId:this.users[position].user.id,enable:this.users[position].roles[role]})
    .then( r => console.log("OK",r))
    .catch( e => console.log("no",e) )
  }
  
  private initRoles(u){
    const roles = {}
    Object.keys(this.roleId).map( key => {
      if( u.Roles.some( r => r.name ===  key ) ) 
      roles[key] = true
    else
      roles[key] = false
    });
    return roles
  }

}
