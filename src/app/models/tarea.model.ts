export class Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    estado: 'pendiente' | 'en progreso' | 'completada';
    usuarioId: number;
    
    constructor(id: number, titulo: string, descripcion: string, estado: 'pendiente' | 'en progreso' | 'completada', usuarioId: number) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.usuarioId = usuarioId;
    }
    }