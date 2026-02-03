import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

declare var google: any;
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  userName = '';
  ngOnInit(): void {
      let token=localStorage.getItem('token');
      const decoded: any = jwtDecode(token || '');
      this.userName = decoded.name;
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
}
