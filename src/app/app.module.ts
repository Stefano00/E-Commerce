import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './bitacora1/home/home.component';
import { ContextoEstrategicoComponent } from './bitacora1/contexto-estrategico/contexto-estrategico.component';
import { TiendaDigitalMediosDePagoComponent } from './bitacora1/tienda-digital-medios-de-pago/tienda-digital-medios-de-pago.component';
import { LogisticaComponent } from './bitacora1/logistica/logistica.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContextoEstrategicoComponent,
    TiendaDigitalMediosDePagoComponent,
    LogisticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
