import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  componentes: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, 
              private dataService: DataService) { }

  ngOnInit() {
      this.componentes = this.dataService.getMenuOpts();
  }

}
