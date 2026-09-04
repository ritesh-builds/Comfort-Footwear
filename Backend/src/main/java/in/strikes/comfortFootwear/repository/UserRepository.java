package in.strikes.comfortFootwear.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.strikes.comfortFootwear.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findByProviderAndProviderSubject(String provider, String providerSubject);
}
