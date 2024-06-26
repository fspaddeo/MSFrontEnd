import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  SelectedItems: multipleSelectorModel[] = [];

  @Input()
  NonSelectedItems: multipleSelectorModel[] = [];

  ngOnInit(): void {
  }

  selectAll(){
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems = [];
  }
  

  deselectAll(){
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems = [];
  }

  select(item: multipleSelectorModel, index:number){
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(index, 1);
  }

  deselect(item: multipleSelectorModel, index:number){
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(index, 1);
  }

}
