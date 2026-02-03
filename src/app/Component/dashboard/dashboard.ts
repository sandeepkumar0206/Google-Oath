import { Component, OnInit } from '@angular/core';
import { Firebase } from '../../services/firebase';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { Loader } from '../../Shared/loader/loader';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule,Header,Loader],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  users: any[] = [];
  loading=false;
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
    this.loading=true;
      this.firebase.getUsers((data)=>{
        this.users = [];
        for (let id in data) {
          this.users.push({ id, ...data[id] });
        } 
      })
    //this.loading=true;

  }

  openModal() {
    this.resetForm();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveUser() {
    //this.loading=true;

    if (this.isEdit && this.editIndex !== null) {
      this.users[this.editIndex] = { ...this.form };
    } else {
      this.firebase.addUser(this.form);
    }
    this.closeModal();
    //this.loading=true;
  }

  editUser(user: any, index: number) {
    this.form = { ...user };
    this.editIndex = index;
    this.isEdit = true;
    this.showModal = true;
  }

  deleteUser(user:any) {
    console.log(user)
    //this.loading=true;
    this.firebase.deleteUser(user.id);
    //this.loading=true;

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
