import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacinasComponent } from './vacinas/vacinas.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuncionariosVacinasComponent } from './funcionariosVacinas/funcionariosVacinas.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [						
    AppComponent,
    VacinasComponent,
      FuncionariosComponent,
      DashboardComponent,
      FuncionariosVacinasComponent,
      NavComponent,
      TituloComponent,
      PerfilComponent
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
