import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrComida: Producto[];
  arrBebida: Producto[];

  productosSeleccionados: Producto[];

  constructor(){
    this.arrComida = [
      new Producto('Sushi', 'https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/02/02043605/Ruta-sushi3-1024x720.jpg', 15),
      new Producto('Sashimi', 'https://imag.bonviveur.com/presentacion-principal-del-sashimi-de-atun.jpg', 9),
      new Producto('Ramen', 'https://www.recetasderechupete.com/wp-content/uploads/2017/11/Ramen-48-768x527.jpg', 12),
      new Producto('Onigiri', 'https://img-global.cpcdn.com/recipes/fe564cf38e1433f6/1200x630cq70/photo.jpg', 7.50),
      new Producto('Furikake', 'https://www.feastingathome.com/wp-content/uploads/2020/02/furikake-recipe-10.jpg', 8.50),
      new Producto('Furikake', 'https://www.feastingathome.com/wp-content/uploads/2020/02/furikake-recipe-10.jpg', 8.50),
    ];
    this.arrBebida = [
      new Producto('Sake', 'https://www.kyotoboutique.fr/13789/sake-japones-ozeki-sake-regular.jpg', 4),
      new Producto('Sake', 'https://www.kyotoboutique.fr/13789/sake-japones-ozeki-sake-regular.jpg', 4),
      new Producto('Ramune', 'https://lafrikileria.com/35986-large_default/ramune-pokemon-refresco-200-ml.jpg', 1.50),
      new Producto('Calpis', 'https://www.tokyo-ya.es/3238-thickbox_default/bebida-calpis-water-500-ml.jpg', 1.50),
      new Producto('Sangaria', 'https://i.ebayimg.com/images/g/lZcAAOSwLAReCa6S/s-l1600.jpg', 1.50),
      new Producto('Sangaria', 'https://i.ebayimg.com/images/g/lZcAAOSwLAReCa6S/s-l1600.jpg', 1.50),
    ];

    this.productosSeleccionados = [];

    
  }
  onProductoSeleccionado($event: any){
    
      const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);
      if (productoEncontrado) {
        productoEncontrado.cantidad++;
      }
      else{
        $event.cantidad = 1;
        this.productosSeleccionados.push($event);
      }
  }
}
