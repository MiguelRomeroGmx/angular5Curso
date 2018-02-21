import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {


  public nombre = "Video Juegos 2018";
  public mejor_juego = "GTA 5";
  public mejor_juego_retro = "Super Mario 64";
  public mostrar_retro = true;
  public color = "orange";
  constructor() { }

  ngOnInit() {
  }

}
