package in.strikes.comfortFootwear.controller;

import in.strikes.comfortFootwear.dto.UserLoginRequestDto;
import in.strikes.comfortFootwear.dto.UserLoginResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import in.strikes.comfortFootwear.dto.UserRegisterRequestDto;
import in.strikes.comfortFootwear.dto.UserRegisterResponseDto;
import in.strikes.comfortFootwear.service.AuthService;

@RestController
@RequestMapping("api/user")
public class UserController {
    private final AuthService authService;

    public UserController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("/hello")
    public ResponseEntity<String> hello(Authentication authentication){
        return ResponseEntity.ok("Hello, "+authentication.getName());
    }

    @PostMapping("/register")
    public ResponseEntity<UserRegisterResponseDto> register(@RequestBody UserRegisterRequestDto userRegisterRequestDto){
        UserRegisterResponseDto registerUser = authService.register(userRegisterRequestDto);
        return ResponseEntity.ok(registerUser);
    }

//    @PostMapping("/login")
//    public ResponseEntity<UserLoginResponseDto> login(@RequestBody UserLoginRequestDto loginRequestDto){
//        UserLoginResponseDto loginUser = authService.login(loginRequestDto);
//        return ResponseEntity.ok(loginUser);
//    }
}









//    @PostMapping
//    public ResponseEntity<String> createUser(@RequestBody UserRegisterRequestDto userRegisterRequestDto){
//        userService.saveUser(user);
//        return ResponseEntity.ok("DONE! User saved Successfully");
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Optional<User>> getUser(@PathVariable Long id){
//        Optional<User> savedUser = userService.getUser(id);
//        return ResponseEntity.ok(savedUser);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<String> deleteUser(@PathVariable Long id){
//        userService.deleteUser(id);
//        return ResponseEntity.ok("User deleted successfully!");
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User user){
//        userService.updateUser(id, user);
//        return ResponseEntity.ok("User updated successfully.");
//    }

