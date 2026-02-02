import { Component } from '@angular/core';
import { Firebase } from '../../services/firebase';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
users: any[] = [];

  constructor(private firebaseService: Firebase) {}

  ngOnInit() {
    this.firebaseService.getUsers(data => {
      this.users = Object.values(data || {});
    });
  }

  addUser() {
    this.firebaseService.addUser({
      name: 'Sandy',
      role: 'admin'
    });
  }
}
