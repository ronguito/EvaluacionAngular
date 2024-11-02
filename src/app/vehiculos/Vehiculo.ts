export class Vehiculo {
    id: number = 1;
    marca: string = "Renault";
    linea: string = "Kangoo";
    referencia: string = "VU Express";
    modelo : number = 2017;
    kilometraje: number = 93272;
    color: string =  "Blanco";
    imagen : string = "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg";

    constructor(){

    }
}

export class Marcas {
    name: string = "";
    cuenta: number = 0;

    constructor(n:string){
        this.name = n;
        this.cuenta = 1;
    }
}
