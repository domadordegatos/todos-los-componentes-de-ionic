import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {
  ocultar='';
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  onClick(){
    this.navCtrl.navigateBack('/');
  }
}
