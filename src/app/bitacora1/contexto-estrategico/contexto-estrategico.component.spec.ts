import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoEstrategicoComponent } from './contexto-estrategico.component';

describe('ContextoEstrategicoComponent', () => {
  let component: ContextoEstrategicoComponent;
  let fixture: ComponentFixture<ContextoEstrategicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextoEstrategicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextoEstrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
