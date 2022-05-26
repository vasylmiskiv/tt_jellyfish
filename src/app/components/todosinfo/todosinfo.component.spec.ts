import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosinfoComponent } from './todosinfo.component';

describe('TodosinfoComponent', () => {
  let component: TodosinfoComponent;
  let fixture: ComponentFixture<TodosinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
