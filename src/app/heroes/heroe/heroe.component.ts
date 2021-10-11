import { Component } from '@angular/core';
@Component(
  {
    selector:'app-heroe',
    templateUrl:'./heroe.componet.html'
  }
)
export class HeroeComponent {
  nombres: string = 'Jose hermogenes';
  apellidos:string = 'Chumioque Pisfil'
  edad  : number = 36;

  //variable propiedad
  get nombreCapitalizado():string {
    return this.nombres.toLocaleUpperCase();
  }

//metodo
  obtenerNombre():string {
   return `${this.nombres}  ${this.apellidos}`;
  }
  cambiarNombre():void{
    this.nombres = 'joselito';
  }
  cambiarEdad():void{
    this.edad = 20;
  }
}
