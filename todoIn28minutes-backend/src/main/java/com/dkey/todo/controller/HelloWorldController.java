package com.dkey.todo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.dkey.todo.dto.HelloWorldBean;

@RestController
public class HelloWorldController {
	
	@GetMapping("/hello-world")
	public String helloWorld() {
		return "Hello world";
	}
	
	@GetMapping("/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello world");
	}
	
	@GetMapping("/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello world, %s", name));
	}
}
