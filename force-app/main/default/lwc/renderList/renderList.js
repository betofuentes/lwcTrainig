import { LightningElement } from 'lwc';

export default class RenderList extends LightningElement {
    listaDeElementos = [
        {
            id: 1,
            name: 'Primer elemento'
        },
        {
            id: 2,
            name: 'Segundo elemento'
        },
        {
            id: 3,
            name: 'Tercer elemento'
        }
    ]
}