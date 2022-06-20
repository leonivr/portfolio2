export class experiencia{
    id?:number;
    esTrabajoActual:String;
    descripcion:String;
    fecha_inicio:String;
    fecha_fin:String;
    nombre_empresa:string;

    constructor (esTrabajoActual:String,descripcion:String,
        fechaInicio:String,fechaFin:String,nombreEmpresa:string
        ){
            this.esTrabajoActual=esTrabajoActual;
            this.descripcion=descripcion;
            this.fecha_inicio=fechaInicio;
            this.fecha_fin=fechaFin;
            this.nombre_empresa=nombreEmpresa;
        }
}