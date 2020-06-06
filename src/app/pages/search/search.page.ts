import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  albums:any[]=[];
  textoBuscar = '';
  constructor(private dataSvc:DataService) { }

  ngOnInit() {

    this.dataSvc.getSearch()
    .subscribe(albumes =>{
      console.log(albumes);
      this.albums = albumes;
      
    });

  }
  onSearchChange(event){
    console.log(event);
    this.textoBuscar = event.detail.value;
  }
}
