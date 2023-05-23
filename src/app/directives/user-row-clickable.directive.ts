import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appUserRowClickable]',
})
export class UserRowClickableDirective {
  @Input() id: string = '';

  constructor(private router: Router) {}

  @HostListener('click')
  onClick(): void {
    this.router.navigate(['/user-details', this.id]);
  }
}
