import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalDbService {

  constructor(private storage: Storage) {
  }

  //setting to save in internal db, result from get path, and how long in minute before reload
  private pathsTime = [
    {is:"^sportHall$", time:1440 },///  60 * 24 = 1440 minutes => 24 hours
    {is:"^sportHall/[0-9]+", time:1 },
  ]

  // check if path is in setting, if yes check is not too old, if no send data from db
  getData(path){

    return new Observable((observer) => {
      
      const pathTime = this.pathsTime.find( p => path.match(p.is) )
      
      if( pathTime === undefined ){
        observer.next()
        observer.complete()
        return
      }

      this.storage.get(path).then((data) => {
        if(data === null){
          observer.next()
          observer.complete()
          return
        }
        const savedDate = new Date(data.added )
        const now = new Date()
        if( ( savedDate.getTime() + ( pathTime.time * 60000 ) ) > now.getTime() ){
          observer.next(data.data)
        }else{
          observer.next()
        }
        observer.complete()
      })
    })
  }


  // check if path is in setting, if yes save data in db

  addData(path,data){

    const pathTime = this.pathsTime.find( p => path.match(p.is) )
    if( pathTime === undefined ) return undefined
    const now = new Date()
    this.storage.set(path, { added: now , data })
  }

}
