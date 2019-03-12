import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornewjqueryComponent } from './fornewjquery.component';

describe('FornewjqueryComponent', () => {
  let component: FornewjqueryComponent;
  let fixture: ComponentFixture<FornewjqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornewjqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornewjqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
