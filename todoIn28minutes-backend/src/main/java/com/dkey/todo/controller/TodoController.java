package com.dkey.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dkey.todo.model.Todo;
import com.dkey.todo.service.TodoHardcodedService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
	@Autowired
	private TodoHardcodedService todoHardcodedService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable("username") String username){
		return todoHardcodedService.findAll();
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable("username") String username, @PathVariable long id){
		return todoHardcodedService.findById(id);
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable("username") String username, 
			@PathVariable long id,
			@RequestBody Todo todo){
		Todo todoUpdated = todoHardcodedService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity deleteTodo(@PathVariable String username, @PathVariable long id) {
		Todo todo = todoHardcodedService.deleteById(id);
		
		if(todo != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
