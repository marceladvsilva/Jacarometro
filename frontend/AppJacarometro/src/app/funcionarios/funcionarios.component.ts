import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../models/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {
  public titulo="Funcionários";
  public funcionarioSelecionado: Funcionario | undefined;

  public funcionarios = [
    {id: 1, nome:"João Lupis", login:"jluis"},
    {id: 2, nome:"Maria Silva", login:"msilva"},
    {id: 3, nome:"Joana Silva", login:"jsilva"}
  ];

  funcionarioSelected(funcionario: Funcionario){
    this.funcionarioSelecionado = funcionario;
  }

  voltar(){
    this.funcionarioSelecionado = undefined;
  }


  constructor() { }

  ngOnInit() {
  }

}
