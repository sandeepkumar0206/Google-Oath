import { Injectable } from '@angular/core';
import { Database, onValue, push, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
   constructor(
    private db: Database
   ) {}

  addUser(user: any) {
    const userRef = ref(this.db, 'users');
    return push(userRef, user);
  }

  getUsers(callback: (data: any) => void) {
    const userRef = ref(this.db, 'users');
    onValue(userRef, snapshot => {
      callback(snapshot.val());
    });
  }
}
