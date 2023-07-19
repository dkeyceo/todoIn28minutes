import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../services/basic-auth.service';
import { HardcodedAuthService } from '../services/hardcoded-auth.service';

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

  constructor(private router: Router,
    private hardcodedAuthService: HardcodedAuthService,
    private basicAuthService: BasicAuthService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // if(this.username === 'dkey' && this.password === 'dkey'){
    if(this.hardcodedAuthService.authenticate(this.username, this.password)){
      this.router.navigate(['/welcome', this.username])
      this.isInvalidLogin = false
    }else{
      this.isInvalidLogin = true
    }
  }

  handleBasicAuthLogin(){
    this.basicAuthService.executeBasicAuthSerivce(this.username, this.password)
    .subscribe(data => {
      this.router.navigate(['/welcome', this.username]);
      this.isInvalidLogin = false;
    }, err=> {
      this.isInvalidLogin = true;
    });
  }

}
