import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.page.html',
  styleUrls: ['./segundo.page.scss'],
})
export class SegundoPage implements OnInit {

    argumento = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.argumento = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
