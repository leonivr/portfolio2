import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { persona } from 'src/app/model/persona.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {

  experiencia: experiencia = new experiencia("","","","","");
  
  constructor(public experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data =>{
      this.experiencia = data
    })
  }

}
