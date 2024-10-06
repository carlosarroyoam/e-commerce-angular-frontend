import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthService } from '@/app/core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  host: {
    class: 'relative',
  },
  imports: [RouterLink],
})
export class UserNavComponent {
  isOpen: boolean = false;

  constructor(private readonly authService: AuthService) {}

  get user() {
    return this.authService.getUser();
  }

  get fullname(): string | null {
    if (!this.user) {
      return null;
    }

    return `${this.user.first_name} ${this.user.last_name}`;
  }

  logout(): void {
    this.authService.logout();
  }

  toggleIsOpen(): void {
    this.isOpen = !this.isOpen;
  }
}