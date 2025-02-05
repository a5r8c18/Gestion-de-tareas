import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class UsuarioService {
private  apiUrl = 'http://localhost:3000/usuarios';

constructor(private  http: HttpClient) { }

getUsuarios(): Observable<Usuario[]> {
return this.http.get<Usuario[]>(this.apiUrl);
}

addUsuario(usuario: Usuario): Observable<Usuario> {
return this.http.post<Usuario>(this.apiUrl, usuario);
}

updateUsuario(usuario: Usuario): Observable<Usuario> {
return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);
}

deleteUsuario(id: number): Observable<void> {
return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}