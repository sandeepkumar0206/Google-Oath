import { Component } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '529076239833-77vfmr5u7ejm5act9ku3s8t5g2qk0vha.apps.googleusercontent.com',
      callback: (response: any) => this.handleLogin(response),
    });

    google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      {
        theme: 'outline',
        size: 'large',
      }
    );
  }

  handleLogin(response: any) {
    localStorage.setItem('token',response.credential);
    window.location.href='/dashboard';
  }

}
