import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {


  public nombre = "Video Juegos 2018";
  public mejor_juego = "GTA 5";
  constructor() { }

  ngOnInit() {
  }

}
