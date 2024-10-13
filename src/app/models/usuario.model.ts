export class Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: 'Admin' | 'User';
    
    constructor(id: number, nombre: string, email: string, rol: 'Admin' | 'User') {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
    }
    }