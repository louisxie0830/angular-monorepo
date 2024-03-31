import { Component, inject } from '@angular/core';
import { UserService } from '@angular-monorepo/shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host';
  private readonly userService = inject(UserService);

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  simulateLogin() {
    this.userService.login();
  }

  simulateLogout() {
    this.userService.logout();
  }
}
