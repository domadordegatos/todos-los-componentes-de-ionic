import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:  Componente[] = [
    /* {icon: 'airplane-outline', name: 'Sheet', redirecTo: '/action-sheet'},
    {icon: 'apps-outline', name: 'Alert', redirecTo: '/alert'},
    {icon: 'battery-full-outline', name: 'Avatar', redirecTo: '/avatar'},
    {icon: 'barbell', name: 'Botones', redirecTo: '/botones'},
    {icon: 'aperture', name: 'Card', redirecTo: '/card'},
    {icon: 'alarm', name: 'check', redirecTo: '/check'},
    {icon: 'build', name: 'date', redirecTo: '/date'},
    {icon: 'bicycle', name: 'fab-button', redirecTo: '/fab'},
    {icon: 'brush', name: 'grid', redirecTo: '/grid'},
    {icon: 'chatbubbles', name: 'infinity', redirecTo: '/infinity'},
    {icon: 'cart', name: 'inputs', redirecTo: '/inputs'},
    {icon: 'airplane', name: 'list', redirecTo: '/list'},
    {icon: 'bulb', name: 'order-list', redirecTo: '/order-list'},
    {icon: 'bluetooth', name: 'loading', redirecTo: '/loading'}, */
  ];
  componentes2:Observable<Componente[]>
  constructor(private menuCtrl:MenuController, private dataSvc:DataService) { }

  ngOnInit() {
    this.componentes2 = this.dataSvc.getMenu();
  }

  menu(){
    this.menuCtrl.toggle();
  }

}