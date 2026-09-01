package in.strikes.comfortFootwear.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import in.strikes.comfortFootwear.model.User;
import in.strikes.comfortFootwear.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String saveUser(User user){
        userRepository.save(user);
        return "ok";
    }

    public Optional<User> getUser(Long id) {
        Optional<User> savedUser = userRepository.findById(id);
        return savedUser;
    }

    public void deleteUser(Long id) {
        Optional<User> savedUser = userRepository.findById(id);
        userRepository.delete(savedUser.get());
    }

    public void updateUser(Long id, User user) {
        Optional<User> savedUser = userRepository.findById(id);

    }
}
