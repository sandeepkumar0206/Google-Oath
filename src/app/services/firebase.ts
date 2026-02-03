import { Injectable } from '@angular/core';
import { deleteUser } from '@angular/fire/auth';
import { Database, onValue, push, ref, remove } from '@angular/fire/database';
import { deleteDoc, doc } from '@angular/fire/firestore';

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
  deleteUser(userId: any) {
   const userRef = ref(this.db, `users/${userId}`);
   remove(userRef);
  }

  getUsers(callback: (data: any) => void) {
    const userRef = ref(this.db, 'users');
    onValue(userRef, snapshot => {
      callback(snapshot.val());
    });
  }
}
