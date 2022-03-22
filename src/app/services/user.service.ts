import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      username: 'user1',
      email: 'email1',
      password: 'password1',
      isAdmin: true,
    },
    {
      id: 2,
      username: 'user2',
      email: 'email2',
      password: 'password2',
      isAdmin: false,
    },
    {
      id: 3,
      username: 'user3',
      email: 'email3',
      password: 'password3',
      isAdmin: false,
    },
    {
      id: 4,
      username: 'user4',
      email: 'email4',
      password: 'password4',
      isAdmin: true,
    },
  ];

  getUsers() {
    return this.users;
  }

  addUser(formValue: {
    username: string;
    email: string;
    password: string;
  }): void {
    const user: User = {
      id: this.users[this.users.length - 1].id + 1,
      ...formValue,
      isAdmin: false,
    };
    this.users.push(user);
  }
}
