import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { TareaComponent } from './tarea/tarea.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
{ path: 'usuarios', component: UsuarioComponent, canActivate: [AuthGuard] },
{ path: 'tareas', component: TareaComponent },
{ path: '', redirectTo: '/tareas', pathMatch: 'full' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }