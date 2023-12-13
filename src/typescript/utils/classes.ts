export default class User{
    public id:number;
    public fname:string;
    public lname:string;
    public email:string;
    public password:string;    
    constructor(id:number,fname:string,lname:string,
                email:string,password:string){
        this.id=id;
        this.fname=fname;
        this.lname=lname;
        this.email=email;
        this.password=password;
    }

}

let x:number=5;