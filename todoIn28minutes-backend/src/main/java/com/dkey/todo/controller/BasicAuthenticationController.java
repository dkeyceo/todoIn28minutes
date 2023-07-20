package com.dkey.todo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.dkey.todo.config.security.basic.AuthenticationBean;
import com.dkey.todo.dto.HelloWorldBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthenticationController {
	
	@GetMapping("/basicauth")
	public AuthenticationBean authenticationBean() {
		return new AuthenticationBean("you are authenticated");
	}
	
}
