import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "src/app/models/user.model"
import { Observable,BehaviorSubject,Subscription } from 'rxjs';
import {LoginUser} from "src/app/models/loginUser.model"

import {InternalDbService} from "./internal-db.service"

@Injectable({
  providedIn: 'root'
})


export class BookingApiService {

  private baseURL = "http://localhost:3000/"
  private headers: HttpHeaders = new HttpHeaders()

  user:User = null
  userObs$ = new BehaviorSubject<User>(null);

  constructor(private _httpClient : HttpClient,private dbIn:InternalDbService) {}

  subscribeUser(action: (value: any) => void): Subscription {
    return this.userObs$.subscribe(action)
  }

  sendPost( path:string,data:any ){
    return new Promise<void>( (success,faild) => {
      this._httpClient.post<any>(this.baseURL+path,data,  { headers: this.headers } )
      .subscribe(
        s => success(s),
        e => faild(e)
      )
    })
  }

  login( user:LoginUser ){
      return new Promise<void>( (success,faild) => {
      this._httpClient.post<User>(this.baseURL+"user/login",user)
      .subscribe(
        (u : any) => {
          console.log("get response ",u)
          this.headers = new HttpHeaders().append("Authorization", u.token);
          this.user = u.user
          this.userObs$.next(u.user)
          success()
        },
        (error) => {
          this.headers.delete("Authorization");
          this.user = null
          this.userObs$.next(null)
          faild(error)
        }
      )
    })
  }

  // request data from API with get
  // check if data in internal db & not too old, else do get and save data in internal db
  sendGet(path:string):Observable<any> {

    return new Observable( obs => {
      this.dbIn.getData(path).subscribe( data => {
        if( data === undefined ){
          this._httpClient.get<any>(this.baseURL+path,  { headers: this.headers }).subscribe(d => {
            console.log("data not in db result from API : ",d)
            obs.next(d)
            this.dbIn.addData(path,d)
            obs.complete()
          })
        }else{
          console.log("no need get to API, data in db : ",data)
          obs.next(data)
          obs.complete()
        }
      })
    })
  }


}
