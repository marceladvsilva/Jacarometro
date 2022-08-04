import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vacina } from '../models/Vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {
  
  baseUrl = `${environment.UrlPrincipal}/api/aluno`;
  
  constructor(private http: HttpClient) { }
  
  
  GetAll(): Observable<Vacina[]> {
    return this.http.get<Vacina[]>(`${this.baseUrl}`);
  }
  
  GetByVacinaId(vacinaId: number): Observable<Vacina> {
    return this.http.get<Vacina>(`${this.baseUrl}/${vacinaId}`);
  }
  
  SaveVacina(vacina: Vacina){
    return this.http.post(`${this.baseUrl}`, vacina);
  }
  
  UpdateVacina(vacina: Vacina){
    return this.http.put(`${this.baseUrl}/${vacina.id}`, vacina);
  }
  
  // put(id:number, Vacina: Vacina){
  //   return this.http.put(`${this.baseUrl}/${id}`, Vacina);
  // }
  
  
  DeleteVacina(vacinaId: number) {
    return this.http.delete(`${this.baseUrl}/${vacinaId}`);
  }
  
  
}
