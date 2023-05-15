export class Transaction {
    account_no: string;
	amount: number;
	toAccountNum: string;
	toIfscCode: string;
	transactionId: string;
	transactionType: string;
	remarks: string;
	timestamp: string;
	action: string;

    constructor(account_no: string, amount: number, toAccountNum: string, toIfscCode: string, transactionId: string, transactionType: string, remarks: string, timestamp: string, action: string){
        this.account_no = account_no;
        this.amount = amount;
        this.toAccountNum = toAccountNum;
        this.toIfscCode = toIfscCode;
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.remarks = remarks;
        this.timestamp = timestamp;
        this.action = action;
    }
}
