package in.strikes.comfortFootwear.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.strikes.comfortFootwear.dto.OrderRequestDto;
import in.strikes.comfortFootwear.dto.OrderResponseDto;
import in.strikes.comfortFootwear.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<OrderResponseDto>> getOrders(Authentication authentication) {
        return ResponseEntity.ok(orderService.getUserOrders(authentication));
    }

    @PostMapping
    public ResponseEntity<OrderResponseDto> placeOrder(
            Authentication authentication,
            @RequestBody OrderRequestDto request) {
        return ResponseEntity.ok(orderService.placeOrder(authentication, request));
    }
}
