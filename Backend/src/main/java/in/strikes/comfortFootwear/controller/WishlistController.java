package in.strikes.comfortFootwear.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.strikes.comfortFootwear.dto.WishlistRequestDto;
import in.strikes.comfortFootwear.dto.WishlistResponseDto;
import in.strikes.comfortFootwear.service.WishlistService;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping
    public ResponseEntity<List<WishlistResponseDto>> getWishlist(Authentication authentication) {
        return ResponseEntity.ok(wishlistService.getUserWishlist(authentication));
    }

    @PostMapping("/toggle")
    public ResponseEntity<WishlistResponseDto> toggleWishlist(
            Authentication authentication,
            @RequestBody WishlistRequestDto request) {
        WishlistResponseDto dto = wishlistService.toggleWishlist(authentication, request);
        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> removeFromWishlist(
            Authentication authentication,
            @PathVariable String productId) {
        wishlistService.removeFromWishlist(authentication, productId);
        return ResponseEntity.noContent().build();
    }
}
