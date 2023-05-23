import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-user-form',
  templateUrl: './create-new-user-form.component.html',
  styleUrls: ['./create-new-user-form.component.css'],
})
export class CreateNewUserFormComponent {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  name: string = '';
  age: string = '';

  fg = this.fb.group({
    nameFormControl: ['', Validators.required],
    ageFormControl: ['', Validators.required],
  });

  get nameFormControl() {
    return this.fg.get('nameFormControl');
  }
  get ageFormControl() {
    return this.fg.get('ageFormControl');
  }

  onFormSubmit() {
    this.name = this.nameFormControl!.value!;
    this.age = this.ageFormControl!.value!;
    this.userService.createUser(this.name, this.age).subscribe(() => {});
    //TODO: REFRESH THE PAGE IF DOESNT APPEAR THE USER
    //this.router.navigate(['/user-list']);
  }
}
