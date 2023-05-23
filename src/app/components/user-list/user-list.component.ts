import { Observable, Subject, of, takeUntil, tap, map } from 'rxjs';
import { UserService } from './../../services/user.service';
import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/models/user.interface';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  //userList$: Observable<UserModel[]> = of();
  userList$: Observable<any> = of();
  private unSubscribe$ = new Subject<void>();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUserList();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

  edit(id: any): void {
    this.router.navigate(['/edit-user', id]);
  }

  delete(id: any): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUserList();
    });
  }

  getUserList(): void {
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
}
