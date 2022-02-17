import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html' 
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  heroeBorrado: string = '';

  borrarHeroe(){

    this.heroeBorrado = this.heroes.shift() || ''; 

    //console.log(heroeBorrado);

  }

}
