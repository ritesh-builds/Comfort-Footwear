package in.strikes.comfortFootwear.controller;

import java.util.HashMap;
import java.util.Map;

import in.strikes.comfortFootwear.dto.UserRegisterRequestDto;
import in.strikes.comfortFootwear.dto.UserRegisterResponseDto;
import in.strikes.comfortFootwear.model.User;
import in.strikes.comfortFootwear.service.AuthService;
import in.strikes.comfortFootwear.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final AuthService authService;
    private final UserService userService;

    public UserController(
            AuthService authService,
            UserService userService
    ) {
        this.authService = authService;
        this.userService = userService;
    }


    // =========================
    // Protected API Test
    // =========================

    @GetMapping("/hello")
    public ResponseEntity<String> hello(
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                "Hello, " + authentication.getName()
        );
    }


    // =========================
    // Normal Registration
    // =========================

    @PostMapping("/register")
    public ResponseEntity<UserRegisterResponseDto> register(
            @RequestBody UserRegisterRequestDto request
    ) {

        UserRegisterResponseDto registeredUser =
                authService.register(request);

        return ResponseEntity.ok(registeredUser);
    }


    // =========================
    // Google OAuth2 Profile
    // =========================

    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> profile(
            @AuthenticationPrincipal OidcUser oidcUser
    ) {

        String provider = "google";

        String subject = oidcUser.getSubject();

        User user =
                userService
                        .findByProviderSubject(
                                provider,
                                subject
                        )
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "User Not Found"
                                )
                        );


        Map<String, Object> response =
                new HashMap<>();

        response.put(
                "internalUserId",
                user.getId()
        );

        response.put(
                "provider",
                user.getProvider()
        );

        response.put(
                "subject",
                user.getProviderSubject()
        );

        response.put(
                "name",
                oidcUser.getClaimAsString("name")
        );

        response.put(
                "email",
                oidcUser.getClaimAsString("email")
        );

        response.put(
                "picture",
                oidcUser.getClaimAsString("picture")
        );


        return ResponseEntity.ok(response);
    }
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

