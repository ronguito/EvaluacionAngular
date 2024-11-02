import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// Importar HttpClientTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

//servicio de datos al servidor
import { ServidorService } from './servidor.service';

// Para el mock del servicio
import { of } from 'rxjs'; 

import { VehiculosComponent } from './vehiculos.component';
import { Vehiculo } from './Vehiculo';


describe('Prueba Lista Peliculas', () => {
  /* atributos necesarios */
  let component: VehiculosComponent;
  let fixture: ComponentFixture<VehiculosComponent>;
  let debug: DebugElement;

  /* Mock del servicio */
  // Mockear la respuesta del servicio
  const mockServerService = {
    getVehiculos: () => of([
        {
            "id": 1,
            "marca": "Mazda",
            "linea": "3",
            "referencia": "Desconocido",
            "modelo": 2017,
            "kilometraje": 20000,
            "color": "Blanco",
            "imagen": "https://mazda.com.co/3.jpg"
        },
        {
            "id": 2,
            "marca": "Chevrolet",
            "linea": "Spark",
            "referencia": "Life",
            "modelo": 2030,
            "kilometraje": 30000,
            "color": "Plata",
            "imagen": "https://chevrolet/spark.jpg"
        },
        {
            "id": 3,
            "marca": "Toyota",
            "linea": "Hilux",
            "referencia": "Todoterreno",
            "modelo": 2016,
            "kilometraje": 50000,
            "color": "Rojo",
            "imagen": "https://toyota/hilux.png"
        }
    ])
  };

  /* Configuración del ambiente de pruebas */
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],  // Usar HttpClientTestingModule para evitar errores
      declarations: [ VehiculosComponent ],
      providers: [
        { provide: ServidorService, useValue: mockServerService }  // Usar el mock del servicio
      ]
    })
    .compileComponents();
  }));

  /* Configuración del componente */
  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosComponent);
    component = fixture.componentInstance;
    component.vehiculos = [ ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  /* Pruebas */

  it('Probar que hay tres elementos en la tabla', async () => {

    fixture.detectChanges();

    // probando que hay tres filas en la tabla
    const filas = debug.queryAll(By.css('tbody tr'));
    expect(filas.length).toEqual(3);

    // Probando los encabezados de la tabla
    const headers = debug.queryAll(By.css('thead tr'));
    expect(headers.length).toEqual(1);

  });

});
