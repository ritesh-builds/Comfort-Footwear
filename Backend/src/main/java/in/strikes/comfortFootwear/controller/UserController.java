package in.strikes.comfortFootwear.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.strikes.comfortFootwear.dto.UserProfileResponseDto;
import in.strikes.comfortFootwear.dto.UserRegisterRequestDto;
import in.strikes.comfortFootwear.dto.UserRegisterResponseDto;
import in.strikes.comfortFootwear.service.AuthService;
import in.strikes.comfortFootwear.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final AuthService authService;
    private final UserService userService;

    public UserController(AuthService authService, UserService userService) {
        this.authService = authService;
        this.userService = userService;
    }

    // =========================
    // Protected API Test
    // =========================

    @GetMapping("/hello")
    public ResponseEntity<String> hello(Authentication authentication) {
        return ResponseEntity.ok("Hello, " + authentication.getName());
    }

    // =========================
    // Normal Registration
    // =========================

    @PostMapping("/register")
    public ResponseEntity<UserRegisterResponseDto> register(@RequestBody UserRegisterRequestDto request) {
        UserRegisterResponseDto registeredUser = authService.register(request);
        return ResponseEntity.ok(registeredUser);
    }

    // =========================
    // Google OAuth2 Profile
    // =========================

    @GetMapping("/profile")
    public ResponseEntity<UserProfileResponseDto> profile(Authentication authentication) {
        UserProfileResponseDto userProfile = userService.getUserProfile(authentication);
        return ResponseEntity.ok(userProfile);
    }
}
