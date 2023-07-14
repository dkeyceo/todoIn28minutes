import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Hello from welcome component';
  messageFromServer = '';
  name = '';

  constructor(private activatedRoute: ActivatedRoute,
    private welcomeService: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.welcomeService.executeHelloWorldBeanService().subscribe(
      data => {
        // this.message = data['message'];
        this.handleSuccessfulResponse(data);
      }
    );
  }

  handleSuccessfulResponse(response){
    this.messageFromServer = response.message;
  }
}
