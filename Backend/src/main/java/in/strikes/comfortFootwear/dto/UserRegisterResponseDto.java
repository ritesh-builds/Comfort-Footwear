package in.strikes.comfortFootwear.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserRegisterResponseDto {
    private String email;
    private String username;
    private String message;
}
