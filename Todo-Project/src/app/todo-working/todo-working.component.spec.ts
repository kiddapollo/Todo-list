import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWorkingComponent } from './todo-working.component';

describe('TodoWorkingComponent', () => {
  let component: TodoWorkingComponent;
  let fixture: ComponentFixture<TodoWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWorkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
