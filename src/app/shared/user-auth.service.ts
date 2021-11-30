import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserAuthService {
  constructor(private http: HttpClient) {}
  registerUser(user: User) {
    return this.http.post(
      'https://todoapp-f4eee-default-rtdb.firebaseio.com/users.json',
      user
    );
  }
}
