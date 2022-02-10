import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleEditionComponent } from './sample-edition.component';

describe('SampleEditionComponent', () => {
  let component: SampleEditionComponent;
  let fixture: ComponentFixture<SampleEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
