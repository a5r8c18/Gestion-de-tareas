import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea.model';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class TareaService {
private  apiUrl = 'http://localhost:3000/tareas';

constructor(private  http: HttpClient) { }

getTareas(): Observable<Tarea[]> {
return this.http.get<Tarea[]>(this.apiUrl);
}

addTarea(tarea: Tarea): Observable<Tarea> {
return this.http.post<Tarea>(this.apiUrl, tarea);
}

updateTarea(tarea: Tarea): Observable<Tarea> {
return this.http.put<Tarea>(`${this.apiUrl}/${tarea.id}`, tarea);
}

deleteTarea(id: number): Observable<void> {
return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}