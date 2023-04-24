import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-personal-data',
    templateUrl: './personal-data.component.html',
    styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent implements OnInit {
    @Input() cardItem: any;
    // o correto é sempre colocar a tipagem

    constructor() {}

    ngOnInit() {}
}
