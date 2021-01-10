export class Role {
    id:number
    name:string
}


export class User{

    name:string
    mail:string
    id:number
    Roles:Array<Role>

}