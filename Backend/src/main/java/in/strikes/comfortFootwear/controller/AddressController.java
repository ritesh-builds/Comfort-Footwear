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

import in.strikes.comfortFootwear.dto.AddressRequestDto;
import in.strikes.comfortFootwear.dto.AddressResponseDto;
import in.strikes.comfortFootwear.service.AddressService;

@RestController
@RequestMapping("/api/addresses")
public class AddressController {

    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping
    public ResponseEntity<List<AddressResponseDto>> getAddresses(Authentication authentication) {
        return ResponseEntity.ok(addressService.getUserAddresses(authentication));
    }

    @PostMapping
    public ResponseEntity<AddressResponseDto> addAddress(
            Authentication authentication,
            @RequestBody AddressRequestDto request) {
        return ResponseEntity.ok(addressService.addAddress(authentication, request));
    }

    @DeleteMapping("/{addressId}")
    public ResponseEntity<Void> deleteAddress(
            Authentication authentication,
            @PathVariable Long addressId) {
        addressService.deleteAddress(authentication, addressId);
        return ResponseEntity.noContent().build();
    }
}
