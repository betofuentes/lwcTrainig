import { LightningElement, wire, api } from 'lwc';
import getOpportunities from '@salesforce/apex/opportunityController.getOpportunities'
export default class LeftSide extends LightningElement {
    allOpps;
    filteredData;
    filterBy;

    @wire(getOpportunities)
    wiredOpps({error, data}) {
        if(data) {
            this.allOpps = data;
            this.filteredData = data;
        } else if(error){
            console.error('Something went wrong', error.body.message);
        }
    }

    handleOnSelect(event){
        console.log(event.detail.stage);
        this.filterBy = event.detail.stage;
        if(this.filterBy === 'AllStages') {
            this.filteredData = this.allOpps;
        } else {
            this.filteredData = this.allOpps.filter((opportunity) => this.filterBy === opportunity.stage);
        }
    }

}