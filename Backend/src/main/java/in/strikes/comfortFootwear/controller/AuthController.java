package in.strikes.comfortFootwear.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.strikes.comfortFootwear.dto.RefreshTokenRequestDto;
import in.strikes.comfortFootwear.dto.UserLoginRequestDto;
import in.strikes.comfortFootwear.dto.UserLoginResponseDto;
import in.strikes.comfortFootwear.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<UserLoginResponseDto> login(@RequestBody UserLoginRequestDto loginRequestDto) {
        UserLoginResponseDto response = authService.login(loginRequestDto);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/refresh")
    public ResponseEntity<UserLoginResponseDto> refresh(@RequestBody RefreshTokenRequestDto request) {
        UserLoginResponseDto response = authService.refreshToken(request);
        return ResponseEntity.ok(response);
    }
}
