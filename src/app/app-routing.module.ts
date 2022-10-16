import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContextoEstrategicoComponent } from './bitacora1/contexto-estrategico/contexto-estrategico.component';
import { HomeComponent } from './bitacora1/home/home.component';
import { LogisticaComponent } from './bitacora1/logistica/logistica.component';
import { TiendaDigitalMediosDePagoComponent } from './bitacora1/tienda-digital-medios-de-pago/tienda-digital-medios-de-pago.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path:'contexto-estrategico',
        component: ContextoEstrategicoComponent
    },
    {
        path:'tienda-digital-medios-de-pago',
        component: TiendaDigitalMediosDePagoComponent
    },
    {
        path: 'logistica',
        component: LogisticaComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}