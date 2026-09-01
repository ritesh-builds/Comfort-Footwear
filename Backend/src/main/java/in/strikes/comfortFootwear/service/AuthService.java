package in.strikes.comfortFootwear.service;

import in.strikes.comfortFootwear.dto.UserLoginRequestDto;
import in.strikes.comfortFootwear.dto.UserLoginResponseDto;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import in.strikes.comfortFootwear.dto.UserRegisterRequestDto;
import in.strikes.comfortFootwear.dto.UserRegisterResponseDto;
import in.strikes.comfortFootwear.model.User;
import in.strikes.comfortFootwear.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;

@Service
public class AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    public AuthService(
            PasswordEncoder passwordEncoder,
            UserRepository userRepository,
            AuthenticationManager authenticationManager
    ) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
    }

    

    public UserRegisterResponseDto register(UserRegisterRequestDto userRegisterRequestDto) {
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

//    public UserLoginResponseDto login(UserLoginRequestDto userLoginRequestDto){
//        User savedUser = userRepository.findByEmail(userLoginRequestDto.getEmail()).orElseThrow(
//                () -> new RuntimeException("User not found!")
//        );
//
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        userLoginRequestDto.getEmail(),
//                        userLoginRequestDto.getPassword()
//                )
//        );
//
//        UserLoginResponseDto userResponse = new UserLoginResponseDto();
//
//        userResponse.setEmail(savedUser.getEmail());
//        userResponse.setUsername(savedUser.getUsername());
//        userResponse.setMessage("Hey "+savedUser.getUsername()+" Login successful !");
//
//        return userResponse;
//    }

}
