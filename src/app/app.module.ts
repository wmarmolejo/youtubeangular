import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { LateralComponent } from './lateral/lateral.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { SugeridosComponent } from './sugeridos/sugeridos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    LateralComponent,
    PublicidadComponent,
    SugeridosComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
