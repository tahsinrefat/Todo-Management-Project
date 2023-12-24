package com.todo.tmsbackend.service;

import com.todo.tmsbackend.dto.TodoDto;
import com.todo.tmsbackend.entity.Todo;

import java.util.List;

public interface TodoService {

    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long id);

    List<TodoDto> getAllTodos();

    TodoDto updateTodo(TodoDto todoDto, Long id);
}
