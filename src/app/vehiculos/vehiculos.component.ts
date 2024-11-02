import { Component, OnInit } from '@angular/core';
import { ServidorService } from './servidor.service';
import { Vehiculo } from './Vehiculo';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})

export class VehiculosComponent implements OnInit {

  vehiculos: Array<Vehiculo> = []

  constructor(private server:ServidorService) { }

  ngOnInit() {
    this.getVehiculos()
  }

  getVehiculos(){
    this.server.getVehiculos().subscribe(vehiculos => { 
      this.vehiculos = vehiculos;   
    });
  }

}
