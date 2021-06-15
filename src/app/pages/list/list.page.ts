import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  //Se crea un objeto, Observable de tipo any
  usuarios: Observable<any>;

  //Hacer referencia a componente html ion-list
  @ViewChild(IonList) ionList: IonList;


  //Llamada al servicio, se inyecta
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuario();

  }

  favorite(user: any) {

    console.log('favorite', user);
    this.ionList.closeSlidingItems();

  }

  share(user: any) {

    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  unread(user: any) {

    console.log('delete', user.name);
    this.ionList.closeSlidingItems();
  }

}
