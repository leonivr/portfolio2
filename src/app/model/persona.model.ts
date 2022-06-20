export class persona{
    id?:number;
    nombre:String;
    apellido:String;
    sobremi:String;
    domicilio:String;
    edad:String;
    telefono:String;
    correo:String;
    img:String;
    fechaNac:String;

    constructor (nombre:String,apellido:String,sobre_mi:String,
        domicilio:String,edad:String,telefono:String,correo:String,img:string,fecha_nac:String){

        this.nombre=nombre;
        this.apellido=apellido;
        this.sobremi=sobre_mi;
        this.domicilio=domicilio;
        this.edad=edad
        this.telefono=telefono;
        this.correo=correo;
        this.img=img;
        this.fechaNac=fecha_nac;
    }
}