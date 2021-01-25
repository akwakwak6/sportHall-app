
class Booking{
    id:number
    start:Date
    end:Date
    message:string
    payed:boolean
}

export class SportHall{

    name:string
    address:string
    id:number
    mainPicture:string
    Bookings:Array<Booking>
}