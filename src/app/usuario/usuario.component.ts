import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
selector: 'app-usuario',
templateUrl: './usuario.component.html',
styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
usuarios: Usuario[] = [];
    displayedColumns: string[] = ['id', 'nombre', 'email', 'rol'];
    
constructor(private usuarioService: UsuarioService) { }

ngOnInit(): void {
this.usuarioService.getUsuarios().subscribe(data => {
this.usuarios = data;
});
}

addUsuario(usuario: Usuario): void {
this.usuarioService.addUsuario(usuario).subscribe(() => {
this.usuarioService.getUsuarios().subscribe(data => {
this.usuarios = data;
});
});
}

updateUsuario(usuario: Usuario): void {
this.usuarioService.updateUsuario(usuario).subscribe(() => {
this.usuarioService.getUsuarios().subscribe(data => {
this.usuarios = data;
});
});
}

deleteUsuario(id: number): void {
this.usuarioService.deleteUsuario(id).subscribe(() => {
this.usuarioService.getUsuarios().subscribe(data => {
this.usuarios = data;
});
});
}
}