import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

/* Material */
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

/* Google maps */
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [MapaEditarComponent],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
