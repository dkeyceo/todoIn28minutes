package com.dkey.todo.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.dkey.todo.model.Todo;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "dkey", "Sing song", new Date(), true ));
		todos.add(new Todo(++idCounter, "dim", "Write email", new Date(), false ));
		todos.add(new Todo(++idCounter, "dron", "Text sms", new Date(), false ));

	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
}
