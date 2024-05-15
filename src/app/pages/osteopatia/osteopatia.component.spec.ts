import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsteopatiaComponent } from './osteopatia.component';

describe('OsteopatiaComponent', () => {
  let component: OsteopatiaComponent;
  let fixture: ComponentFixture<OsteopatiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsteopatiaComponent]
    });
    fixture = TestBed.createComponent(OsteopatiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
