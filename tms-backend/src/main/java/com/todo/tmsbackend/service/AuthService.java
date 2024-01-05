package com.todo.tmsbackend.service;

import com.todo.tmsbackend.dto.LoginDto;
import com.todo.tmsbackend.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
