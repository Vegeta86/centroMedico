export class Paciente {
    
    public nombre:string;
    public paterno:string;
    public materno:string;
    public sexo:string;
    public edad:string;
    public correo:string;
    public salud:string;

    constructor(nombre:string,paterno:string,materno:string,sexo:string,edad:string,correo:string,salud:string){
        this.nombre=nombre;
        this.paterno=paterno;
        this.materno=materno;
        this.sexo=sexo;
        this.edad=edad;
        this.correo=correo;
        this.salud=salud;
    }

}
