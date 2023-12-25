package com.todo.tmsbackend.controller;

import com.todo.tmsbackend.dto.TodoDto;
import com.todo.tmsbackend.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/todos")
@AllArgsConstructor
public class TodoController {

    private TodoService todoService;

    //add todo REST api
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){
        TodoDto savedTodoDto = todoService.addTodo(todoDto);

        return new ResponseEntity<>(savedTodoDto, HttpStatus.CREATED);
    }

    //get todo REST api

    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable("id") Long todoId){
        TodoDto todoDto = todoService.getTodo(todoId);
        return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }

    //get all todos REST api
    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos(){
        List<TodoDto> todos = todoService.getAllTodos();
//        return new ResponseEntity<>(todos, HttpStatus.OK);
        return ResponseEntity.ok(todos);
    }

    //update todo REST api
    @PutMapping("{id}")
    public ResponseEntity<TodoDto> updateTodo(@RequestBody TodoDto todoDto,@PathVariable("id") Long todoId){
        TodoDto updatedTodo = todoService.updateTodo(todoDto,todoId);
        return ResponseEntity.ok(updatedTodo);
    }

    //delete todo REST api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable("id") Long todoId){
        todoService.deleteTodo(todoId);
        return ResponseEntity.ok("Todo Deleted Successfully");
    }

    //complete todo REST api
    @PatchMapping("{id}/complete")   //update existing todo partially
    public ResponseEntity<TodoDto> completeTodo(@PathVariable("id") Long todoId){
        TodoDto completedTodo = todoService.completeTodo(todoId);
        return ResponseEntity.ok(completedTodo);
    }

    //incomplete todo REST api
    @PatchMapping("{id}/in-complete")
    public ResponseEntity<TodoDto> inCompleteTodo(@PathVariable("id") Long todoId){
        TodoDto inCompletedTodo = todoService.inCompleteTodo(todoId);
        return ResponseEntity.ok(inCompletedTodo);
    }

}
