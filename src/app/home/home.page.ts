import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private navCtrl: NavController) {}
  valor = 'Neyder Neme';

  pushSegunda(){
    this.router.navigate(['/segundo',this.valor]);
  }
  pushSegundaNavCtrl(){
    this.navCtrl.navigateForward(`/segundo/${this.valor}`);
  }
}
