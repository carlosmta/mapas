import { Component, OnInit } from '@angular/core';
import { InfoWindowManager } from '@agm/core';
import { Marcador } from '../../classes/marcador.class';
import { log } from 'util';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];


  lat = 51.678418;
  lng = 7.809007;

  constructor( public snackBar: MatSnackBar,
               public dialog: MatDialog     ) {

    const nuevoMarcador = new Marcador(51.678418, 7.80900);
    this.marcadores.push( nuevoMarcador );

    if ( localStorage.getItem('marcadores') ) {
      this.marcadores = JSON.parse( localStorage.getItem('marcadores') );
    }


   }

  ngOnInit() {
  }

  borrarMarcador(i) {
    this.marcadores.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
  }

  agregarMarcador(evento) {

    const coords: { lat: number, lng: number } = evento.coords;

    const nuevoMarcador = new Marcador( coords.lat , coords.lng );

    this.marcadores.push( nuevoMarcador );

    console.log(this.marcadores);

    this.saveStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
  }

  editarMarcador( marcador: Marcador ) {
        const dialogRef = this.dialog.open(MapaEditarComponent, {
          width: '250px',
          data: { titulo: marcador.titulo , desc: marcador.desc }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(result);

          if (!result) {
            return;
          }

          marcador.titulo = result.titulo;
          marcador.desc = result.desc;

          this.saveStorage();
          this.snackBar.open('Marcador actualizado', 'Cerrar', {duration: 3000});

        });
  }

  saveStorage() {
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ) );
  }

}
