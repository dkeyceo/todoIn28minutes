package com.dkey.todo.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.dkey.todo.model.Todo;
import com.dkey.todo.repository.TodoJpaRepository;
import com.dkey.todo.service.TodoHardcodedService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaController {
	
	@Autowired
	private TodoJpaRepository todoJpaRepository;
	
	
	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable("username") String username){
		return todoJpaRepository.findByUsername(username);
	}
	
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable("username") String username, @PathVariable long id){
		return todoJpaRepository.findById(id).get();
	}
	
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<?> createTodo(@PathVariable("username") String username, 
			@RequestBody Todo todo){
		
		todo.setUsername(username);
		Todo todoCreated = todoJpaRepository.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable("username") String username, 
			@PathVariable long id,
			@RequestBody Todo todo){
		Todo todoUpdated = todoJpaRepository.save(todo);
		return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
	}
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity deleteTodo(@PathVariable String username, @PathVariable long id) {
		todoJpaRepository.deleteById(id);	
		return ResponseEntity.noContent().build();
	}
}
