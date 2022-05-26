import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetodoComponent } from './createtodo.component';

describe('CreatetodoComponent', () => {
  let component: CreatetodoComponent;
  let fixture: ComponentFixture<CreatetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
