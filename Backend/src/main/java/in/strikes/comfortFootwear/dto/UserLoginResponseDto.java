package in.strikes.comfortFootwear.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginResponseDto {

    private String email;
    private String username;
    private String message;
    private String accessToken;
    private String refreshToken;
}