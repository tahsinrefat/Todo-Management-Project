package com.todo.tmsbackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "todos")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //for auto increment
    private Long id;

    @Column(name = "title",nullable = false)
    private String title;
    @Column(name = "description", nullable = false)
    private String description;
    @Column
    private boolean completed;  //booleans are by default not null
}
