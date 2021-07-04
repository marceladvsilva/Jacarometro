import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacinasComponent } from './vacinas/vacinas.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VacinasFuncionariosComponent } from './vacinasFuncionarios/vacinasFuncionarios.component';

@NgModule({
  declarations: [							
    AppComponent,
    VacinasComponent,
      FuncionariosComponent,
      DashboardComponent,
      NavComponent,
      TituloComponent,
      PerfilComponent,
      VacinasFuncionariosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
