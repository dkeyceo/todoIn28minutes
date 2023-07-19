import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
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

  getTodo(username, id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  createTodo(username, todo){
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }

  updateTodo(username, id, todo){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  deleteTodo(username, id){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }
}
