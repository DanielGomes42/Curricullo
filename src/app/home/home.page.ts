import { Component, OnInit } from '@angular/core';
import { CurriculumSection } from '../models/curriculum/curriculum-section';
import { CurriculumService } from '../services/curriculum.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  curriculumData: CurriculumSection[]

  constructor(private curriculumService: CurriculumService) {}

  ngOnInit(): void {
    this.getCurriculumData()
  }

  getCurriculumData(): any {
    this.curriculumService.getCurriculumData().subscribe(response => {
      this.curriculumData = response.body[0].sections
      console.log(this.curriculumData)
    },
    error => {
      console.log(error)
    })
  }

}
