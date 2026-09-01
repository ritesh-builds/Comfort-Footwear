package in.strikes.comfortFootwear.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserLoginRequestDto {

    private String email;
    private String password;
}