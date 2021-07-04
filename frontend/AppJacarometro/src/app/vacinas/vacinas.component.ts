import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Vacina } from '../models/Vacina';

@Component({
  selector: 'app-vacinas',
  templateUrl: './vacinas.component.html',
  styleUrls: ['./vacinas.component.css']
})
export class VacinasComponent implements OnInit {

  public titulo="Vacinas";
  public vacinaSelecionada: Vacina | undefined;
  public vacinaForm!: FormGroup;

  public vacinas = [
    {id: 1, nome:"Coronavac", periodoDose:14, tipoIntervalo:"D"},
    {id: 2, nome:"Astrazeneca", periodoDose:3, tipoIntervalo:"M"},
    {id: 3, nome:"Pfizer", periodoDose:3, tipoIntervalo:"M"}
  ];

  constructor(private fb: FormBuilder) { 
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm(){
    this.vacinaForm = this.fb.group({
      id: [''],
      nome:['', Validators.required],
      periodoDose: ['', Validators.required],
      tipoIntervalo: ['', Validators.required]
    });
  }

  deletarVacina(id: number){
    // this.VacinaService.delete(id).subscribe(
    //   (model: any) => {
    //     console.log(model);
    //     this.carregarAlunos();
    //   },
    //   (erro: any) => {
    //     console.error(erro);
    //   }
    // )

  }

  vacinaSubmit(){
    console.log(this.vacinaForm.value);
  }

  vacinaSelected(vacina: Vacina){
    this.vacinaSelecionada = vacina;
    this.vacinaForm.patchValue(vacina);

  }

  voltar(){
    this.vacinaSelecionada = undefined;
  }



 

}
