import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public desc: string,
    public done: boolean,
    public targetDate: Date
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    /*
    { id: 1, desc: 'Learn to dance'},
    { id: 2, desc: 'buy milk'},
    { id: 3, desc: 'Earn 1 billion $'}
    */
   new Todo(1, 'Learn to dance' , false, new Date()),
   new Todo(2, 'Buy milk' , false, new Date()),
   new Todo(3, 'Earn 1 billion $' , false, new Date()),
  ];

  todo = {
    id: 1,
    desc: 'Learn to dance'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
