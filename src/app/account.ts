export class Account {
    oldid:string="";
    userTitle:string="";
    userFirstname:string="";
    userMiddlename:string="";
    userLastname:string="";
    userFathername:string="";
    userMobileno:string="";
    userDob:string="";
    userEmailid:string="";
    userAadharcard:string="";
    userResidentialaddr:string="";
    userPermanentaddr:string="";
    userOccupation_type:string="";
    userGrossannualincome:string="";
    userisVerified:boolean;
    userisLocked:boolean;
    counter:number;

    constructor(oldid: string, userTitle: string, userFirstname: string, userMiddlename: string, userLastname: string, userFathername: string,
       userMobileno: string, userDob: string,userEmailid: string,userAadharcard: string, userResidentialaddr: string, userPermanentaddr: string, userOccupation_type: string,
       user_Grossannualincome: string, userisVerified:boolean, userisLocked:boolean, counter:number){
           this.oldid = oldid;
           this.userTitle=userTitle;
           this.userFirstname=userFirstname;
           this.userMiddlename=userMiddlename;
           this.userLastname=userLastname;
           this.userFathername=userFathername;
           this.userMobileno=userMobileno;
           this.userDob=userDob;
           this.userAadharcard=userAadharcard;
           this.userResidentialaddr=userResidentialaddr;
           this.userPermanentaddr=userPermanentaddr;
           this.userOccupation_type=userOccupation_type;
           this.userGrossannualincome=this.userGrossannualincome;
           this.userisVerified=userisVerified;
           this.userisLocked=userisLocked;
           this.counter=counter;


   }

}


