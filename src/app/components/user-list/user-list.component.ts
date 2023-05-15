import { Observable, Subject, of, takeUntil, tap } from 'rxjs';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  userList$: Observable<any> = of();
  private unSubscribe$ = new Subject<void>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUserList()
      .pipe(takeUntil(this.unSubscribe$))
      .pipe(
        tap((data) => {
          console.log(data);
        })
      )
      .subscribe((data) => {
        this.userList$ = of(data);
      });
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
