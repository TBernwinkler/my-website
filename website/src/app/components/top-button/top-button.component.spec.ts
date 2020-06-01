import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopButtonComponent } from './top-button.component';

describe('TopButtonComponent', () => {
  let component: TopButtonComponent;
  let fixture: ComponentFixture<TopButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
