import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // createBasicAuthHttpHeader() {
  //   let username = 'dkey';
  //   let password = 'dkey';
  //   let basicAuthHeaderString = 'Basic '+ btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

  // getBasicHeaders(){
  //   return new HttpHeaders({
  //     Authorization: this.createBasicAuthHttpHeader()
  //   });
  // }

  executeHelloWorldBeanService(){
    // let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    return this.http.get<HelloWorldBean>(this.url,
       //{headers}
       );

    // console.log('Executed Hello world Bean service');
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    return this.http.get<HelloWorldBean>(`${this.urlPath}/${name}`, {
      //headers: this.getBasicHeaders()
    });
  }
}
