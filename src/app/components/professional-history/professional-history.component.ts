import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-professional-history',
    templateUrl: './professional-history.component.html',
    styleUrls: ['./professional-history.component.scss'],
})
export class ProfessionalHistoryComponent implements OnInit {
    @Input() cardItem: any;
    constructor() {}

    ngOnInit() {}
}
