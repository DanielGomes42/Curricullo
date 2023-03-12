import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-education-level',
    templateUrl: './education-level.component.html',
    styleUrls: ['./education-level.component.scss'],
})
export class EducationLevelComponent implements OnInit {
    @Input() cardItem: any;

    constructor() {}

    ngOnInit() {}
}
