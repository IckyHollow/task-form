import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskV2Component } from './create-task-v2.component';

describe('CreateTaskV2Component', () => {
  let component: CreateTaskV2Component;
  let fixture: ComponentFixture<CreateTaskV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTaskV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTaskV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
