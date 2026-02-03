import { Component, OnInit } from '@angular/core';
import { Firebase } from '../../services/firebase';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule,Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  users: any[] = [];
  constructor(
    private firebase:Firebase
  ){

  }

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
  ngOnInit(): void {
      this.firebase.getUsers((data)=>{
        this.users = [];
        for (let id in data) {
          this.users.push({ id, ...data[id] });
        } 
      })
  }

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
      this.firebase.addUser(this.form);
    }
    this.closeModal();
  }

  editUser(user: any, index: number) {
    this.form = { ...user };
    this.editIndex = index;
    this.isEdit = true;
    this.showModal = true;
  }

  deleteUser(user:any) {
    console.log(user)
    this.firebase.deleteUser(user.id);
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
