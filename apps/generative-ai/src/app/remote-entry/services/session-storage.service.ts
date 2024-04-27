import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  setItem(key: string, value: unknown): void {
    try {
      const jsonValue = JSON.stringify(value);
      sessionStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving to sessionStorage', error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) as T : null;
    } catch (e) {
      console.error('Error getting data from sessionStorage', e);
      return null;
    }
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
