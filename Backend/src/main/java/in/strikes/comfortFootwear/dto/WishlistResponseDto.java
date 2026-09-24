package in.strikes.comfortFootwear.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WishlistResponseDto {
    private Long id;
    private String productId;
    private String name;
    private String price;
    private String category;
    private String image;
}
