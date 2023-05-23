import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewUserFormComponent } from './create-new-user-form.component';

describe('CreateNewUserFormComponent', () => {
  let component: CreateNewUserFormComponent;
  let fixture: ComponentFixture<CreateNewUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewUserFormComponent]
    });
    fixture = TestBed.createComponent(CreateNewUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
