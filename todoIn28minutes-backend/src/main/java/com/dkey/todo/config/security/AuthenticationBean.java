package com.dkey.todo.config.security;

public class AuthenticationBean {
	
	private String message;

	
	public AuthenticationBean() {

	}

	public AuthenticationBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	

}
