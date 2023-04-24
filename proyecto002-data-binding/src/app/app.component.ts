import { Component } from '@angular/core';
import Articulo from './models/articulo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos: Array<Articulo> = [];
  codigo = 0;
  descripcion = '';
  precio = 0;

  agregar()
  {
    if (!this.codigo || !this.descripcion.length || !this.precio)
    {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if(this.buscarArticulo(this.codigo))
    {
      alert('No se puede agregar ya que existe otro articulo con el mismo codigo.')
      return;
    }

    alert('Se agrego de forma satifactoria.');
    let articulo: Articulo = new Articulo(this.codigo, this.descripcion, this.precio);
    this.articulos.push(articulo);
    
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

  borrar(codigo: number)
  {
    const resultado = confirm ('Desea elimar este articulo?');
    if (resultado)
    {
      this.articulos = this.articulos.filter (e => e.codigo !== codigo);
    }
  }

  buscarArticulo(codigo: number)
  {
    return this.articulos.find (e => e.codigo === codigo);
  }

}
