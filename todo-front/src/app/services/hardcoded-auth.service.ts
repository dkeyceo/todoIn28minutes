import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username, password){
    if(username === 'dkey' && password === 'dkey'){
      return true;
    }
    return false;
  }
}
