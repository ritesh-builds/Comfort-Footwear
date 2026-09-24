package in.strikes.comfortFootwear.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.strikes.comfortFootwear.model.Address;
import in.strikes.comfortFootwear.model.User;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    List<Address> findByUserOrderByIdDesc(User user);
}
