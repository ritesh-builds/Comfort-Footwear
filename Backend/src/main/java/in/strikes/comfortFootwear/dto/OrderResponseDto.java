package in.strikes.comfortFootwear.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDto {
    private String id; // e.g. ORD-12345
    private String date;
    private String status;
    private String total;
    private List<OrderItemDto> items;

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class OrderItemDto {
        private String name;
        private String price;
        private String category;
    }
}
