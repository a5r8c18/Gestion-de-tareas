import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { UsuarioComponent } from './usuario/usuario.component';
import { TareaComponent } from './tarea/tarea.component';

@NgModule({
declarations: [
AppComponent,
UsuarioComponent,
TareaComponent
],
imports: [
BrowserModule,
BrowserAnimationsModule,
MatTableModule,
MatButtonModule,
MatInputModule,
MatFormFieldModule,
MatIconModule,
MatToolbarModule,
MatSidenavModule,
MatListModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }