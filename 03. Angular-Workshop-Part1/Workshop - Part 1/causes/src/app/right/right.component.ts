import { Component, OnInit } from '@angular/core';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  get color() { 
    if(this.selectedCause.collectedAmount >= this.selectedCause.neededAmount){
      return 'green';
    }
    if(this.selectedCause.collectedAmount < 2 * this.selectedCause.neededAmount / 3 &&
      this.selectedCause.collectedAmount >  this.selectedCause.neededAmount / 3){
      return 'yellow';
    }
      return 'red';
   }

  get selectedCause() { return this.causesService.selectedCause; }

  constructor(private causesService: CausesService) { }

  ngOnInit() {
  }

}
