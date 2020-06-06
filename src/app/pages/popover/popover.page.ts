import { PopinfoComponent } from './../../components/popinfo/popinfo.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popCtrl:PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(event){
    const popover = await this.popCtrl.create({
      component: PopinfoComponent,
      event: event,
      mode:'ios',
      backdropDismiss:false //obligatorio seleccionar
    });
    await popover.present();
    /* const {data} = await popover.onDidDismiss(); */
    const {data} = await popover.onWillDismiss();

    console.log("padre: ",data);
    
  }


}
