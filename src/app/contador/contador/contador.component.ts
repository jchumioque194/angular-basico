import { Component } from '@angular/core';
@Component({
  selector:'app-contador',
  template: `<h1>{{title}}</h1>
  <h3>la base es <strong>{{base}}</strong></h3>

  <button (click) = "numero = numero +1;">+1</button>
  <span >{{numero}}</span>
  <button (click)= "numero = numero -1;">-1</button>

  <button (click) = "acumular(base);">+{{base}}</button>
  <span >{{numero2}}</span>
  <button (click)= "acumular(-base);">-{{base}}</button>`
})
export class ContadorComponent {
  public title: string = 'Mi primer proyecto';
  numero:number = 0;
  numero2:number = 0;
  base  :number = 5;


  acumular(valor:number) {
    this.numero2 = this.numero2 + valor;

  }

}
