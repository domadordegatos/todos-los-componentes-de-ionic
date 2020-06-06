import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {
  fNacimiento: Date = new Date();
  customPickerOptions;
  customDate;
  constructor() { }

  ngOnInit() {
      this.customPickerOptions = {
        buttons: [{
          text: 'Save',
          handler: (evento) =>{
            console.log('Clicked Save!');
            console.log(evento);
            
        }
        }, {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
          }
        }]
      }
  }

  cambioFecha(event){
    console.log("evento=>", event);
    console.log("date=>", new Date(event.detail.value));
    
  }
}
