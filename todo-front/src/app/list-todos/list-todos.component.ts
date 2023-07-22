import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/data/todo.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
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

  todos: Todo[] = [
    /*
    { id: 1, desc: 'Learn to dance'},
    { id: 2, desc: 'buy milk'},
    { id: 3, desc: 'Earn 1 billion $'}

    new Todo(1, 'Learn to dance' , false, new Date()),
   new Todo(2, 'Buy milk' , false, new Date()),
   new Todo(3, 'Earn 1 billion $' , false, new Date()),
    */
  ];
  message: string
  username: string
/*
  todo = {
    id: 1,
    desc: 'Learn to dance'
  };
*/


  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllTodos()
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticaterUser');
  }
  getAllTodos(){

    this.todoService.getAllTodos(this.getAuthenticatedUser()).subscribe(data => {
      this.todos = data;
    })
  }

  deleteTodo(id){
    this.todoService.deleteTodo(this.getAuthenticatedUser(), id).subscribe(() => {
      this.message = 'Deleted todo with id ' + id;
      this.getAllTodos();
    });
  }



  updateTodo(id){
    this.router.navigate(['/todos',id]);
    /*
    this.todoService.deleteTodo('dkey', id).subscribe(() => {
      this.message = 'Deleted todo with id ' + id;
      this.getAllTodos();
    });
    */
  }

  addTodo(){
    this.router.navigate(['/todos',-1]);
  }
}
