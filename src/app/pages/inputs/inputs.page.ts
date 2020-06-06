import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {
  nombre:string;
  user = {
    name:'',
    password:''
  };
  constructor() { }

  ngOnInit() {
  }
  sendTemplate(){
    console.log("enviando...");
    console.log("info=> ", this.user);
    
  }
}
