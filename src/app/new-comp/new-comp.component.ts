import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit 
{
  name : string;
  sName : string;
  concatStr : string = "Infosystem";
  constructor() 
  {
    this.name = "Marvellous";
    this.sName = this.name.toLowerCase();
    this.concatStr = this.name.concat(this.concatStr);
  }

  ngOnInit(): void {
  }

}
