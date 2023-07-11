import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {
      id: 1,
      desc: 'Learn to dance'
    },
    {
      id: 2,
      desc: 'buy milk'
    },
    {
      id: 3,
      desc: 'Earn 1 billion'
    }
  ];

  todo = {
    id: 1,
    desc: 'Learn to dance'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
