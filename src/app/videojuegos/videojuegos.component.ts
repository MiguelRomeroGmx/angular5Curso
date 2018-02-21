import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {


  public nombre:string;
  public mejor_juego:string;
  public mejor_juego_retro:string;
  public mostrar_retro:boolean;
  public color:string;
  public year:number;

  public videojuegos:Array<string>;

  constructor() { 
    this.nombre = "Video Juegos 2018";
    this.mejor_juego = "GTA 5";
    this.mejor_juego_retro = "Super Mario 64";
    this.mostrar_retro = true;
    this.color  = "orange";
    this.year = 2018;

    this.videojuegos = [
    'Los simson hit and run',
    'Assins creed',
    'GTA 5',
    'Call of Duty',
    'Tekken'
  ];
  }

  ngOnInit() {
  }

}
