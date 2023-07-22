package com.dkey.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dkey.todo.model.Todo;

public interface TodoJpaRepository extends JpaRepository<Todo, Long> {
	List<Todo> findByUsername(String username);
}
