import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  urlAllTodos = `http://localhost:8080/users/`
  constructor(private http: HttpClient) { }

  getAllTodos(username){
    return this.http.get<Todo[]>(this.urlAllTodos+username+'/todos');
  }
  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
