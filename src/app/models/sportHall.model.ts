
class Booking{
    id:number
    start:Date
    end:Date
    message:string
}

export class SportHall{

    name:string
    address:string
    id:number
    mainPicture:string
    Bookings:Array<Booking>
}

export function getSportHall(sh:any){//TODO => mapper, maybe easier ?
    const sportHall = new SportHall()
    sportHall.name = sh.name
    sportHall.address = sh.address
    sportHall.id = sh.id
    sportHall.mainPicture = sh.mainPicture
    sportHall.Bookings = []
    sh.Bookings.forEach(b => {
        sportHall.Bookings.push( {
            id : b.id,
            start: new Date(b.start),
            end: new Date(b.end),
            message: b.message
        } )
    });
    return sportHall
    
}