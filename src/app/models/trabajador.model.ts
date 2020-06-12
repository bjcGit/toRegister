export class TrabajadorModel {
    id:string;
    cedula: string;
    temperatura: string;
    estado: boolean;
    preg1: boolean;
    preg2: boolean;
    preg3: boolean;

    constructor (){
        this.estado = true;
    }
}

