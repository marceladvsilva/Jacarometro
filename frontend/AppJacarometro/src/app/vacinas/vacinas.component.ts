import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Vacina } from '../models/Vacina';
import { VacinasService } from './vacinas.service';

@Component({
  selector: 'app-vacinas',
  templateUrl: './vacinas.component.html',
  styleUrls: ['./vacinas.component.css']
})
export class VacinasComponent implements OnInit {

  public titulo="Vacinas";
  public vacinaSelecionada: Vacina | undefined;
  public vacinaForm!: FormGroup;
  // public vacinas!: [];
  public vacinas:any[] = [];

  constructor(private fb: FormBuilder,
              private vacinasService: VacinasService) { 
    this.criarForm();
  }

  ngOnInit(): void {
    this.carregarVacinas();
  }

  carregarVacinas(this: any) {
    this.vacinasService.getAll().subscribe(
      (vacinas: Vacina[]) => {
        this.vacinas = vacinas;
        // this.alunos = vacinas;
      },
      (erro: any) => {
        console.error(erro)
      }
    );
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

