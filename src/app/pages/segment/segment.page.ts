import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;

  superHeroes:Observable<any>;
  publisher='';

  constructor(private dataSvc:DataService) { }

  ngOnInit() {  
    /* this.segment.value = 'todos'; */
    this.superHeroes =  this.dataSvc.getHeroes();
  }

  segmentChanged(event){  

    const valseg = event.detail.value;

    if(valseg === 'todos'){
      this.publisher = '';
      return;
    }
    this.publisher = valseg;
    console.log(valseg);
  }
}
