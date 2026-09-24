package in.strikes.comfortFootwear.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import in.strikes.comfortFootwear.dto.WishlistRequestDto;
import in.strikes.comfortFootwear.dto.WishlistResponseDto;
import in.strikes.comfortFootwear.exception.ResourceNotFoundException;
import in.strikes.comfortFootwear.model.User;
import in.strikes.comfortFootwear.model.Wishlist;
import in.strikes.comfortFootwear.repository.UserRepository;
import in.strikes.comfortFootwear.repository.WishlistRepository;

@Service
public class WishlistService {

    private final WishlistRepository wishlistRepository;
    private final UserRepository userRepository;

    public WishlistService(WishlistRepository wishlistRepository, UserRepository userRepository) {
        this.wishlistRepository = wishlistRepository;
        this.userRepository = userRepository;
    }

    private User getAuthenticatedUser(Authentication authentication) {
        Long userId = Long.valueOf(authentication.getName());
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + userId));
    }

    public List<WishlistResponseDto> getUserWishlist(Authentication authentication) {
        User user = getAuthenticatedUser(authentication);
        return wishlistRepository.findByUser(user)
                .stream()
                .map(w -> new WishlistResponseDto(
                        w.getId(),
                        w.getProductId(),
                        w.getProductName(),
                        w.getProductPrice(),
                        w.getProductCategory(),
                        w.getProductImage()
                ))
                .toList();
    }

    @Transactional
    public WishlistResponseDto toggleWishlist(Authentication authentication, WishlistRequestDto request) {
        User user = getAuthenticatedUser(authentication);
        Optional<Wishlist> existing = wishlistRepository.findByUserAndProductId(user, request.getProductId());

        if (existing.isPresent()) {
            wishlistRepository.delete(existing.get());
            return null;
        } else {
            Wishlist item = new Wishlist();
            item.setUser(user);
            item.setProductId(request.getProductId());
            item.setProductName(request.getName());
            item.setProductPrice(request.getPrice());
            item.setProductCategory(request.getCategory());
            item.setProductImage(request.getImage());

            Wishlist saved = wishlistRepository.save(item);
            return new WishlistResponseDto(
                    saved.getId(),
                    saved.getProductId(),
                    saved.getProductName(),
                    saved.getProductPrice(),
                    saved.getProductCategory(),
                    saved.getProductImage()
            );
        }
    }

    @Transactional
    public void removeFromWishlist(Authentication authentication, String productId) {
        User user = getAuthenticatedUser(authentication);
        wishlistRepository.deleteByUserAndProductId(user, productId);
    }
}
