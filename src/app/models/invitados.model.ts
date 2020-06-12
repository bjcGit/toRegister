export class InvitadosModel{
    
    id:string;
    cedula: string;
    apellido: string;
    nombre: string;
    rh: string;
    temperatura: string;
    estado: boolean; 
    
    constructor (){
        this.estado = true;
    }  

}