import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoService } from '../services/data/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id != -1) {
    this.todoService.getTodo(this.getAuthenticatedUser(), this.id)
        .subscribe(data => this.todo = data);
    }
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticaterUser');
  }

  saveTodo(){
    if(this.id == -1){

      this.todoService.createTodo(this.getAuthenticatedUser(), this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos']);
          });

    }else {
    this.todoService.updateTodo(this.getAuthenticatedUser(), this.id, this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos']);
          });
    }
  }
}
