package in.strikes.comfortFootwear.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileResponseDto {
    private Long internalUserId;
    private String provider;
    private String subject;
    private String name;
    private String email;
}
