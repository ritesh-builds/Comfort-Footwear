package in.strikes.comfortFootwear.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressRequestDto {
    private String fullName;
    private String phone;
    private String streetAddress;
    private String city;
    private String state;
    private String pincode;
    private String addressType;
    private boolean isDefault;
}
