package in.strikes.comfortFootwear.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class UserRegisterRequestDto {
    private String email;
    private String username;
    private String password;
}
