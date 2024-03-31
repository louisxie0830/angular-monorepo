import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLoggedIn = signal(false);

  get isLoggedIn() {
    return this._isLoggedIn();
  }

  login() {
    this._isLoggedIn.set(true)
  }

  logout() {
    this._isLoggedIn.set(false);
  }
}
