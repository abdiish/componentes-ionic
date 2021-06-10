import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ){
    console.log(event);
    //Recueprar fecha a un tipo fecha de javascript
    console.log( new Date( event.detail.value ));
  }

}