import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {


  items = Array(10);
  constructor(private popCrtl:PopoverController) { }

  ngOnInit() {}
  
  send(value:number){
    console.log("item seleccioonadio",value);
    
    this.popCrtl.dismiss({
      item:value
    });
  }
}
