import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  isInvalidLogin = false
  errorMessage = 'Invalid creds'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.username === 'dkey' && this.password === 'dkey'){
      this.router.navigate(['/welcome', this.username])
      this.isInvalidLogin = false
    }else{
      this.isInvalidLogin = true
    }
  }
}
