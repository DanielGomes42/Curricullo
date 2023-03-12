import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
    @Input() cardItem: any;

    constructor() {}

    ngOnInit() {}
}
