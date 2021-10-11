import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  semana:string[] = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
  mostrarsemana :string[]=[];
  flag: boolean = false;
  // borar un dia de la semana
borrarSemana():void{
  if (this.semana.length > 0) {
    const nada= this.semana.splice(0,1);
      this.mostrarsemana = nada;
      console.log(nada)
      if (this.mostrarsemana.length > 0) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }


}
verificarBorrado() {
  if (this.mostrarsemana.length > 0) {
    this.flag = true;
  } else {
    this.flag = false;
  }
}


}
