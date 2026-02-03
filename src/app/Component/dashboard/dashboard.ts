import { Component } from '@angular/core';
import { Firebase } from '../../services/firebase';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

   users: any[] = [];

  showModal = false;
  isEdit = false;
  editIndex: number | null = null;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    rank: '',
  };

  openModal() {
    this.resetForm();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveUser() {
    if (this.isEdit && this.editIndex !== null) {
      this.users[this.editIndex] = { ...this.form };
    } else {
      this.users.push({ ...this.form });
    }
    this.closeModal();
  }

  editUser(user: any, index: number) {
    this.form = { ...user };
    this.editIndex = index;
    this.isEdit = true;
    this.showModal = true;
  }

  deleteUser(index: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.users.splice(index, 1);
    }
  }

  resetForm() {
    this.isEdit = false;
    this.editIndex = null;
    this.form = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      rank: '',
    };
  }
}
