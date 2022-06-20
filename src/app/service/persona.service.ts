import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaURL = 'http://localhost:8080/personas';
  experienciaUrl = 'http://localhost:8080/experiencias';

  constructor(private http: HttpClient) { }

  public getPersona():Observable<persona>{

    return this.http.get<persona>(this.personaURL+'/traer/perfil');
  }
  public getExperiencia():Observable<experiencia[]>{

    return this.http.get<experiencia[]>(this.experienciaUrl+'/traer/experiencia');
  }
}
