import { LightningElement, wire } from 'lwc';
import getStageFieldValue from '@salesforce/apex/opportunityController.getStageFieldValue'

export default class StagePickList extends LightningElement {
    value;
    options;

   // get options() {
   //     return [
   //         {label: 'All Stages', value: 'allStages'},
   //         {label: 'New', value: 'new'},
   //         {label: 'In Progress', value: 'inProgress'},
   //         {label: 'Finished', value: 'finished'}

   //     ]
   // }


   @wire(getStageFieldValue)
   getStages({error, data}){
       if(data){
           const values = [
               {
                   label: 'All Stages',
                   value: 'AllStages'
               }
           ]
           for(let stage in data){
               values.push({
                   label: stage, // al traerlo así, toma el label
                   value: data[stage] // al buscarlo, toma el value
               })
           }
           this.options = values;
           this.value = values[0].value;
       }else if(error){
           console.error(error);
       }
   }
}