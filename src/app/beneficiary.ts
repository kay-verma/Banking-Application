export class Beneficiary {
    accountNo : number;
    beneficiaryaccno: number;
    nickname: string;
    ifsccode: string;

    constructor(accountNo: number, beneficiaryaccno: number, nickname: string, ifsccode: string){
        this.accountNo = accountNo;
        this.beneficiaryaccno = beneficiaryaccno;
        this.nickname = nickname;
        this.ifsccode = ifsccode;
    }
}
