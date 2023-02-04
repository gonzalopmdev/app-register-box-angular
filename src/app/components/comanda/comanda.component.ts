import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent {

  @Input() arrProductos: Producto[];

  constructor(){
    this.arrProductos = [];
  }

  calculaTotal(){
    let resultado =  0;
      for(let producto of this.arrProductos){
        resultado += (producto.precio * producto.cantidad);
      }

    return resultado;
  }

  onClickBorrar(pIndice: any){
    if (this.arrProductos[pIndice].cantidad === 1){
      this.arrProductos.splice(pIndice,1);
    }
    else {
      this.arrProductos[pIndice].cantidad--;
    }
    
    
    
  }

}
