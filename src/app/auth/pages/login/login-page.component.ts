import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthService } from '@/app/core/services/auth.service';
import { ButtonDirective } from '@/app/shared/components/ui/button/button.directive';
import { ErrorDirective } from '@/app/shared/components/ui/error/error.directive';
import { InputDirective } from '@/app/shared/components/ui/input/input.directive';
import { LabelDirective } from '@/app/shared/components/ui/label/label.directive';

@Component({
  standalone: true,
  templateUrl: './login-page.component.html',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ButtonDirective,
    LabelDirective,
    InputDirective,
    ErrorDirective,
  ],
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private readonly authService: AuthService) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(): void {
    this.authService.login({
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    });
  }
}
