package in.strikes.comfortFootwear.service;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import in.strikes.comfortFootwear.dto.AddressRequestDto;
import in.strikes.comfortFootwear.dto.AddressResponseDto;
import in.strikes.comfortFootwear.exception.ResourceNotFoundException;
import in.strikes.comfortFootwear.model.Address;
import in.strikes.comfortFootwear.model.User;
import in.strikes.comfortFootwear.repository.AddressRepository;
import in.strikes.comfortFootwear.repository.UserRepository;

@Service
public class AddressService {

    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    public AddressService(AddressRepository addressRepository, UserRepository userRepository) {
        this.addressRepository = addressRepository;
        this.userRepository = userRepository;
    }

    private User getAuthenticatedUser(Authentication authentication) {
        Long userId = Long.valueOf(authentication.getName());
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + userId));
    }

    public List<AddressResponseDto> getUserAddresses(Authentication authentication) {
        User user = getAuthenticatedUser(authentication);
        return addressRepository.findByUserOrderByIdDesc(user)
                .stream()
                .map(this::mapToDto)
                .toList();
    }

    public AddressResponseDto addAddress(Authentication authentication, AddressRequestDto request) {
        User user = getAuthenticatedUser(authentication);

        Address address = new Address();
        address.setUser(user);
        address.setFullName(request.getFullName());
        address.setPhone(request.getPhone());
        address.setStreetAddress(request.getStreetAddress());
        address.setCity(request.getCity());
        address.setState(request.getState());
        address.setPincode(request.getPincode());
        address.setAddressType(request.getAddressType() != null ? request.getAddressType() : "Home");
        address.setDefault(request.isDefault());

        Address saved = addressRepository.save(address);
        return mapToDto(saved);
    }

    public void deleteAddress(Authentication authentication, Long addressId) {
        User user = getAuthenticatedUser(authentication);
        Address address = addressRepository.findById(addressId)
                .orElseThrow(() -> new ResourceNotFoundException("Address not found with ID: " + addressId));

        if (!address.getUser().getId().equals(user.getId())) {
            throw new IllegalArgumentException("Unauthorized to delete this address");
        }

        addressRepository.delete(address);
    }

    private AddressResponseDto mapToDto(Address address) {
        return new AddressResponseDto(
                address.getId(),
                address.getFullName(),
                address.getPhone(),
                address.getStreetAddress(),
                address.getCity(),
                address.getState(),
                address.getPincode(),
                address.getAddressType(),
                address.isDefault()
        );
    }
}
