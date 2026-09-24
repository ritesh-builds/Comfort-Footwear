package in.strikes.comfortFootwear.service;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Random;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import in.strikes.comfortFootwear.dto.OrderRequestDto;
import in.strikes.comfortFootwear.dto.OrderResponseDto;
import in.strikes.comfortFootwear.exception.ResourceNotFoundException;
import in.strikes.comfortFootwear.model.Order;
import in.strikes.comfortFootwear.model.User;
import in.strikes.comfortFootwear.repository.OrderRepository;
import in.strikes.comfortFootwear.repository.UserRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    public OrderService(OrderRepository orderRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }

    private User getAuthenticatedUser(Authentication authentication) {
        Long userId = Long.valueOf(authentication.getName());
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + userId));
    }

    public List<OrderResponseDto> getUserOrders(Authentication authentication) {
        User user = getAuthenticatedUser(authentication);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM d, yyyy");

        return orderRepository.findByUserOrderByCreatedAtDesc(user)
                .stream()
                .map(order -> new OrderResponseDto(
                        order.getOrderNumber(),
                        order.getCreatedAt() != null ? order.getCreatedAt().format(formatter) : "Recently",
                        order.getStatus(),
                        order.getPrice(),
                        List.of(new OrderResponseDto.OrderItemDto(
                                order.getProductName(),
                                order.getPrice(),
                                "Footwear"
                        ))
                ))
                .toList();
    }

    public OrderResponseDto placeOrder(Authentication authentication, OrderRequestDto request) {
        User user = getAuthenticatedUser(authentication);

        Order order = new Order();
        order.setUser(user);
        order.setOrderNumber("ORD-" + (10000 + new Random().nextInt(90000)));
        order.setProductName(request.getProductName() != null ? request.getProductName() : "Comfort Footwear Shoe");
        order.setPrice(request.getPrice() != null ? request.getPrice() : "₹2,999");
        order.setStatus("Processing");

        Order saved = orderRepository.save(order);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM d, yyyy");

        return new OrderResponseDto(
                saved.getOrderNumber(),
                saved.getCreatedAt().format(formatter),
                saved.getStatus(),
                saved.getPrice(),
                List.of(new OrderResponseDto.OrderItemDto(
                        saved.getProductName(),
                        saved.getPrice(),
                        "Footwear"
                ))
        );
    }
}
