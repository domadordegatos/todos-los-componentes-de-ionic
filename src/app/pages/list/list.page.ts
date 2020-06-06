import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista') lista: IonList;
  user:Observable<any>;

  constructor(private dataSvc:DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.user = this.dataSvc.getUsers();
  }

  async presentToast(message:string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }


  share(user){
    /* console.log("share",user); */
    this.presentToast('Emparejado el bluetooth');
    this.lista.closeSlidingItems();
  }
  like(user){
    /* console.log("like",user); */
    this.presentToast('Emparejado el bluetooth');
    this.lista.closeSlidingItems();
  }
  delete(user){
    /* console.log("delete",user); */
    this.presentToast('Emparejado el bluetooth');
    this.lista.closeSlidingItems();
  }
}
