import { UserService } from '../../services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, of, takeUntil, tap } from 'rxjs';

@Component({
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  user$: Observable<any> = of();
  id: string = '';
  name: string = '';
  age: string = '';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private aRoute: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  fg = this.fb.group({
    nameFormControl: [this.name, Validators.required],
    ageFormControl: [this.age, Validators.required],
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
    this.userService.editUser(this.id, this.name, this.age).subscribe(() => {});
    this.router.navigate(['/user-list']);
  }

  ngOnInit(): void {
    this.aRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.id = this.aRoute.snapshot.paramMap.get('id') as string;

        this.userService
          .getUser(this.id)
          .pipe(
            tap((data) => {
              console.log(data);
            })
          )
          .subscribe((data) => {
            this.user$ = of(data);
          });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
