package in.strikes.comfortFootwear.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.strikes.comfortFootwear.model.User;
import in.strikes.comfortFootwear.model.Wishlist;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Long> {
    List<Wishlist> findByUser(User user);
    Optional<Wishlist> findByUserAndProductId(User user, String productId);
    void deleteByUserAndProductId(User user, String productId);
}
