import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VacinasComponent } from './vacinas/vacinas.component';
import { VacinasFuncionariosComponent } from './vacinasFuncionarios/vacinasFuncionarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'vacinas', component: VacinasComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'vacinasFuncionarios', component: VacinasFuncionariosComponent},
  {path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
