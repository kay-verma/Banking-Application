export class AccountDetails {
	accountNo : string = '';
	userid : string = '';
	accountType : string = '';
	accountBalance : number = 0;
	userIfscCode : string = '';
	oldid : string = '';

    // constructor(){}
    constructor(account_no: string, account_type: string, user_id: string, balance: number, IFSC_code: string, oldid: string) {
        this.accountNo = account_no;
        this.accountType = account_type;
        this.userid = user_id;
        this.accountBalance = balance;
        this.userIfscCode = IFSC_code;
        this.oldid = oldid;
    }

}
