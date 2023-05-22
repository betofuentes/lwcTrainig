import { LightningElement } from 'lwc';

export default class Ejemplo extends LightningElement {
    // Data binding
    firstName = 'Edagar';
    lastName = 'Lopez';
    yearBirth = 1992;
    
    get age() {
        return 2023 - this.yearBirth;
    }
}

