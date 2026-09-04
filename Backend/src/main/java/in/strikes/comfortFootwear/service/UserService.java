package in.strikes.comfortFootwear.service;

import java.util.Optional;

import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

import in.strikes.comfortFootwear.model.User;
import in.strikes.comfortFootwear.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String saveUser(User user) {
        userRepository.save(user);
        return "ok";
    }

    public Optional<User> getUser(Long id) {
        return userRepository.findById(id);
    }

    public void deleteUser(Long id) {
        Optional<User> savedUser = userRepository.findById(id);

        if (savedUser.isPresent()) {
            userRepository.delete(savedUser.get());
        }
    }

    public User registerOrUpdate(
            String provider,
            OidcUser oidcUser
    ) {

        String username =
                oidcUser.getClaimAsString("name");

        String email =
                oidcUser.getClaimAsString("email");

        String providerSubject =
                oidcUser.getSubject();

        // 1. Check by provider + providerSubject
        Optional<User> existingUser =
                userRepository.findByProviderAndProviderSubject(
                        provider,
                        providerSubject
                );

        if (existingUser.isPresent()) {

            User user = existingUser.get();

            user.setUsername(username);
            user.setEmail(email);

            return userRepository.save(user);
        }

        // 2. If not found, check by email
        Optional<User> existingEmailUser =
                userRepository.findByEmail(email);

        if (existingEmailUser.isPresent()) {

            User user = existingEmailUser.get();

            user.setUsername(username);
            user.setProvider(provider);
            user.setProviderSubject(providerSubject);

            return userRepository.save(user);
        }

        // 3. Completely new Google user
        User newUser = new User(
                providerSubject,
                email,
                provider,
                username
        );

        return userRepository.save(newUser);
    }

    public Optional<User> findByProviderSubject(
            String provider,
            String subject
    ) {
        return userRepository.findByProviderAndProviderSubject(
                provider,
                subject
        );
    }
}