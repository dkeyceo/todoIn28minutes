package com.dkey.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
}
