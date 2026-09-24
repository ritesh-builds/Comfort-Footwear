package in.strikes.comfortFootwear.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    private String password;

    private boolean enabled = true;

    private String provider;

    private String providerSubject;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Address> addresses = new ArrayList<>();

    // Normal registration user
    public User(
            String providerSubject,
            String email,
            String password,
            String provider,
            String username
    ) {
        this.providerSubject = providerSubject;
        this.email = email;
        this.password = password;
        this.provider = provider;
        this.username = username;
    }

    // Google OAuth user
    public User(
            String providerSubject,
            String email,
            String provider,
            String username
    ) {
        this.providerSubject = providerSubject;
        this.email = email;
        this.provider = provider;
        this.username = username;
    }
}
