import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

/* Material */
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

/* Google maps */
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
