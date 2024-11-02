import { Component, OnInit } from '@angular/core';
import { ServidorService } from './servidor.service';
import { Vehiculo, Marcas } from './Vehiculo';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})

export class VehiculosComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  contadorMarcas: Marcas[] = [];

  constructor(private server:ServidorService) { }

  ngOnInit() {
    this.getVehiculos()
  }

  getVehiculos(){
    this.server.getVehiculos().subscribe(vehiculos => { 
      this.vehiculos = vehiculos;
      this.contadorMarcas = this.contarMarcas();  
    });
  }

  contarMarcas(): Marcas[] {
    const contadorMarcas: Marcas[] = [];

    for (const vehiculo of this.vehiculos) {
        const marcaExistente = contadorMarcas.find(m => m.name === vehiculo.marca);
        
        if (marcaExistente) {
            marcaExistente.cuenta++;
        } else {
            contadorMarcas.push(new Marcas(vehiculo.marca)); 
        }
    }
    return contadorMarcas;
}

}
