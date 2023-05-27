import { LightningElement, wire, api, track} from 'lwc';
import getOpportunities from '@salesforce/apex/opportunityController.getOpportunities'
export default class LeftSide extends LightningElement {
    allOpps;
    @track filteredData;
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
        console.log("Evento en handleOnSelect: " + JSON.stringify(event.detail));
        this.filterBy = event.detail;
        if(this.filterBy === 'AllStages') {
            this.filteredData = this.allOpps;
        } else {
            this.filteredData = this.allOpps.filter((opportunity) => opportunity.StageName === this.filterBy);
        }
        //console.log(JSON.stringify(this.filteredData));
    }

}