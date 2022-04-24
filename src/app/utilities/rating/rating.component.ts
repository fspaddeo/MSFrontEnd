import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  maxRating = 5;
  @Input()
  selectedRate = 0;

  maxRatingArr: number[] = [];
  previousRate: number = 0;

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number){
    this.selectedRate = index +1 ;
  }

  handleMouseLeave(){
    if(this.previousRate !== 0){
      this.selectedRate = this.previousRate;
    }else{
      this.selectedRate = 0 ;
    }
  }

  handleClick(index: number){
    this.selectedRate = index +1;
    this.previousRate = this.selectedRate;
  }
}
