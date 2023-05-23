import { Observable, Subject, of, takeUntil, tap, map } from 'rxjs';
import { Component, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.css'],
})
export class UserListTableComponent {
  @Input() userList: UserModel[] = [];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  dataSource = new MatTableDataSource<UserModel>();
  displayedColumns = ['id', 'name', 'age'];

  ngOnInit(): void {
    console.log(this.userList);
    this.dataSource = new MatTableDataSource<UserModel>(this.userList);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
