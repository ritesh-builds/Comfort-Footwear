package in.strikes.comfortFootwear.controller;

import org.springframework.core.io.ResourceLoader;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.strikes.comfortFootwear.dto.RefreshTokenRequestDto;
import in.strikes.comfortFootwear.dto.UserLoginRequestDto;
import in.strikes.comfortFootwear.dto.UserLoginResponseDto;
import in.strikes.comfortFootwear.service.JwtService;

@RestController
@RequestMapping("/auth")
public class AuthController {

   
    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    private final JwtDecoder jwtDecoder;

    public AuthController(
                ResourceLoader resourceLoader, 
                AuthenticationManager authenticationManager, 
                JwtService jwtService,
                JwtDecoder jwtDecoder
        ) {
                this.authenticationManager = authenticationManager;
                this.jwtService = jwtService;
                this.jwtDecoder = jwtDecoder;
        }

    @PostMapping("/login")
    public ResponseEntity<UserLoginResponseDto> login(
            @RequestBody UserLoginRequestDto loginRequestDto) {

        Authentication authentication =
                authenticationManager.authenticate(
                        UsernamePasswordAuthenticationToken.unauthenticated(
                                loginRequestDto.getEmail(),
                                loginRequestDto.getPassword()
                        )
                );

        String accessToken = jwtService.generateAccessToken(authentication);
        String refreshToken = jwtService.generateRefreshToken(authentication);

        UserLoginResponseDto response = new UserLoginResponseDto();

        response.setEmail(loginRequestDto.getEmail());
        response.setAccessToken(accessToken);
        response.setRefreshToken(refreshToken);
        response.setMessage("Login successful!");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/refresh")
    public ResponseEntity<UserLoginResponseDto> refresh(
            @RequestBody RefreshTokenRequestDto request) {

        Jwt jwt = jwtDecoder.decode(request.getRefreshToken());

        String subject = jwt.getSubject();

        String accessToken = jwtService.generateAccessToken(subject);

        UserLoginResponseDto response = new UserLoginResponseDto();

        response.setAccessToken(accessToken);
        response.setMessage("Access token refreshed successfully!");

        return ResponseEntity.ok(response);
    }
}
