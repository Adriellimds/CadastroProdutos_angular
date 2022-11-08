import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasEditComponent } from './bebidas-edit.component';

describe('BebidasEditComponent', () => {
  let component: BebidasEditComponent;
  let fixture: ComponentFixture<BebidasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidasEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
