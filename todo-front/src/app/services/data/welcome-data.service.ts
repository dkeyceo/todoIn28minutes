import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  url = 'http://localhost:8080/hello-world-bean';
  urlPath = 'http://localhost:8080/hello-world/path-variable';


  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(this.url);

    // console.log('Executed Hello world Bean service');
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    return this.http.get<HelloWorldBean>(`${this.urlPath}/${name}`);
  }
}
