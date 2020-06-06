import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresbar',
  templateUrl: './progresbar.page.html',
  styleUrls: ['./progresbar.page.scss'],
})
export class ProgresbarPage implements OnInit {
  porcentaje = 0.05;
  constructor() { }

  ngOnInit() {
  }
  rangeChange(event){
    console.log(event);
    this.porcentaje = event.detail.value / 100;
  }
}
