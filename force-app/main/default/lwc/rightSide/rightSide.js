import { LightningElement } from 'lwc';
import NAME from '@salesforce/schema/Opportunity.Name';
import AMOUNT from '@salesforce/schema/Opportunity.Amount';
import STAGE from '@salesforce/schema/Opportunity.StageName';
import TYPE from '@salesforce/schema/Opportunity.Type';
import PROBABILITY from '@salesforce/schema/Opportunity.Probability';
import CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';
import ACCOUNT from '@salesforce/schema/Opportunity.AccountId';
import OWNER from '@salesforce/schema/Opportunity.OwnerId';

export default class RightSide extends LightningElement {
    fields = [NAME, AMOUNT, STAGE, TYPE, PROBABILITY, CLOSE_DATE, ACCOUNT, OWNER];
}