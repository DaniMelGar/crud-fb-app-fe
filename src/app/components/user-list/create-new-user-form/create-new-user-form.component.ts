import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-new-user-form',
  templateUrl: './create-new-user-form.component.html',
  styleUrls: ['./create-new-user-form.component.css'],
})
export class CreateNewUserFormComponent {
  constructor(private fb: FormBuilder, private userService: UserService) {}

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
  }
}
