import { UserService } from '../../services/user.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, of, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  user$: Observable<any> = of();
  id: string = '';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      this.id = this.route.snapshot.paramMap.get('id') as string;

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
