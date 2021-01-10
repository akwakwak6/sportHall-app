import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "src/app/models/user.model"
import { Observable,BehaviorSubject,Subscription } from 'rxjs';
import {LoginUser} from "src/app/models/loginUser.model"

@Injectable({
  providedIn: 'root'
})


export class BookingApiService {

  private baseURL = "http://localhost:3000/"
  private headers: HttpHeaders = new HttpHeaders()

  userObs$ = new BehaviorSubject<User>(null);

  constructor(private _httpClient : HttpClient) {}

  subscribeUser(action: (value: any) => void): Subscription {
    return this.userObs$.subscribe(action)
  }

  sendPost( path:string,data:any ) : Observable<any>{
    return this._httpClient.post<Boolean>(this.baseURL+path,data,  { headers: this.headers } )
  }

  login( user:LoginUser ){
      return new Promise<void>( (success,faild) => {
      this._httpClient.post<User>(this.baseURL+"user/login",user).subscribe(
        (u : any) => {
          console.log("get response ",u)
          this.headers = new HttpHeaders().append("Authorization", u.token);
          this.userObs$.next(u.user)
          success()
        },
        (error) => {
          this.headers.delete("Authorization");
          this.userObs$.next(null)
          faild(error)
        }
      )
    })
  }

  /*

  sendGet<T>(path:string) : Observable<> {
    return this._httpClient.get<T>(this.baseURL+path,  { headers: this.headers })
  }

  getAndSetData<T,U>(path:string,data: U) : Observable<T>{
    return this._httpClient.post<T>(this.baseURL+path,data,  { headers: this.headers })
  }
*/


}
