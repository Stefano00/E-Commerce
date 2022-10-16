import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaDigitalMediosDePagoComponent } from './tienda-digital-medios-de-pago.component';

describe('TiendaDigitalMediosDePagoComponent', () => {
  let component: TiendaDigitalMediosDePagoComponent;
  let fixture: ComponentFixture<TiendaDigitalMediosDePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaDigitalMediosDePagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaDigitalMediosDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
