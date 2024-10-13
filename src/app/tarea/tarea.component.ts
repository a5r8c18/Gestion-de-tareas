import { Component, OnInit } from '@angular/core';
import { TareaService } from '../services/tarea.service';
import { Tarea } from '../models/tarea.model';

@Component({
selector: 'app-tarea',
templateUrl: './tarea.component.html',
styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
tareas: Tarea[] = [];
displayedColumns: string[] = ['id', 'titulo', 'descripcion', 'estado', 'usuarioId'];

constructor(private tareaService: TareaService) { }

ngOnInit(): void {
this.tareaService.getTareas().subscribe(data => {
this.tareas = data;
});
}

addTarea(): void {
    const nuevaTarea: Tarea = {
    id: this.tareas.length + 1,
    titulo: 'Nueva Tarea',
    descripcion: 'Descripción de la nueva tarea',
    estado: 'pendiente',
    usuarioId: 1 // Asigna el ID del usuario correspondiente
    };
    this.tareaService.addTarea(nuevaTarea).subscribe(() => {
    this.tareaService.getTareas().subscribe(data => {
    this.tareas = data;
    });
    });
    }

updateTarea(tarea: Tarea): void {
this.tareaService.updateTarea(tarea).subscribe(() => {
this.tareaService.getTareas().subscribe(data => {
this.tareas = data;
});
});
}

deleteTarea(id: number): void {
this.tareaService.deleteTarea(id).subscribe(() => {
this.tareaService.getTareas().subscribe(data => {
this.tareas = data;
});
});
}
}