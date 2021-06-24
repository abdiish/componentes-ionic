import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Se inyecta el http
  constructor( private http: HttpClient) { }

  //Se crea una función 
  getUsuario() {
    
    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }

  getMenuOpts() {
    
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');

  }

}
