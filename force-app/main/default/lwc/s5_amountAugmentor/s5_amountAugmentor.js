import { LightningElement, api, wire, track } from 'lwc';
import {getRecord, getFieldValue, updateRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

import AMOUNT from '@salesforce/schema/Opportunity.Amount';
import ACCOUNT_NAME from '@salesforce/schema/Opportunity.Account.Name'

const fields = [ACCOUNT_NAME, AMOUNT];
export default class S5_amountAugmentor extends LightningElement {

    @track allSums = {
        sumAmount: 0
    }

    @api recordId;
    @wire(getRecord, {recordId: '$recordId', fields})
    thisOpp; // incluye data - error

    get isNotCero() {
        return this.allSums.sumAmount != 0 ? true : false;
    }

    get totalSumAmt() {
        return this.amount + this.allSums.sumAmount;
    }
    get amount() {
        return getFieldValue(this.thisOpp.data, AMOUNT);
    }
    get accountName() {
        return getFieldValue(this.thisOpp.data, ACCOUNT_NAME);
    }

    sub100() {
        this.allSums.sumAmount -=100;
    }

    add100() {
        this.allSums.sumAmount +=100;
    }

    sub1000() {
        this.allSums.sumAmount -=1000;
    }

    add1000() {
        this.allSums.sumAmount +=1000;
    }

    save() {
        let fields = {
            Id: this.recordId,
            Amount: this.totalSumAmt
        }
        const recordInput = {fields};
        updateRecord(recordInput).then(() => {
            this.allSums.sumAmount = 0; //reset de suma.
            this.dispatchEvent(
                new ShowToastEvent({
                    title: "Success",
                    message: "Amount updated successfully!",
                    variant: "success"
                })
            );
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: "Error",
                    message: "Error while updating your amount",
                    variant: "error"
                })
            );
        });
    }
}