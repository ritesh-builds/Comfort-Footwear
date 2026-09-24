package in.strikes.comfortFootwear.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;

import in.strikes.comfortFootwear.dto.RefreshTokenRequestDto;
import in.strikes.comfortFootwear.dto.UserLoginRequestDto;
import in.strikes.comfortFootwear.dto.UserLoginResponseDto;
import in.strikes.comfortFootwear.dto.UserRegisterRequestDto;
import in.strikes.comfortFootwear.dto.UserRegisterResponseDto;
import in.strikes.comfortFootwear.exception.DuplicateResourceException;
import in.strikes.comfortFootwear.exception.ResourceNotFoundException;
import in.strikes.comfortFootwear.model.User;
import in.strikes.comfortFootwear.repository.UserRepository;

import org.springframework.security.authentication.BadCredentialsException;
import in.strikes.comfortFootwear.model.CustomUserDetails;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final JwtDecoder jwtDecoder;

    public AuthService(
            PasswordEncoder passwordEncoder,
            UserRepository userRepository,
            AuthenticationManager authenticationManager,
            JwtService jwtService,
            JwtDecoder jwtDecoder
    ) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.jwtDecoder = jwtDecoder;
    }

    public UserRegisterResponseDto register(UserRegisterRequestDto userRegisterRequestDto) {
        if (userRepository.findByEmail(userRegisterRequestDto.getEmail()).isPresent()) {
            throw new DuplicateResourceException("User already exists with email: " + userRegisterRequestDto.getEmail());
        }

        User user = new User();
        user.setUsername(userRegisterRequestDto.getUsername());
        user.setEmail(userRegisterRequestDto.getEmail());
        String encodedPassword = passwordEncoder.encode(userRegisterRequestDto.getPassword());
        user.setPassword(encodedPassword);
        user.setEnabled(true);

        userRepository.save(user);

        UserRegisterResponseDto userRegisterResponseDto = new UserRegisterResponseDto();
        userRegisterResponseDto.setUsername(user.getUsername());
        userRegisterResponseDto.setEmail(user.getEmail());
        userRegisterResponseDto.setMessage("User saved successfully!");

        return userRegisterResponseDto;
    }

    public UserLoginResponseDto login(UserLoginRequestDto loginRequestDto) {
        User user = userRepository.findByEmail(loginRequestDto.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("No account found with email '" + loginRequestDto.getEmail() + "'. Please create an account first."));

        if (user.getPassword() == null || !passwordEncoder.matches(loginRequestDto.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Invalid password. Please check your credentials and try again.");
        }

        CustomUserDetails customUserDetails = new CustomUserDetails(user);
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                customUserDetails,
                null,
                customUserDetails.getAuthorities()
        );

        String accessToken = jwtService.generateAccessToken(authentication);
        String refreshToken = jwtService.generateRefreshToken(authentication);

        UserLoginResponseDto response = new UserLoginResponseDto();
        response.setInternalUserId(user.getId());
        response.setEmail(user.getEmail());
        response.setName(user.getUsername());
        response.setUsername(user.getUsername());
        response.setAccessToken(accessToken);
        response.setRefreshToken(refreshToken);
        response.setMessage("Login successful!");

        return response;
    }

    public UserLoginResponseDto refreshToken(RefreshTokenRequestDto request) {
        Jwt jwt = jwtDecoder.decode(request.getRefreshToken());
        String subject = jwt.getSubject();
        String accessToken = jwtService.generateAccessToken(subject);

        UserLoginResponseDto response = new UserLoginResponseDto();
        response.setAccessToken(accessToken);
        response.setMessage("Access token refreshed successfully!");

        return response;
    }
}
