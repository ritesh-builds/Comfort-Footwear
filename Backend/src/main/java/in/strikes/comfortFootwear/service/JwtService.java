package in.strikes.comfortFootwear.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import org.springframework.context.annotation.Lazy;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

    private final JwtEncoder jwtEncoder;

    @Value("${jwt.issuer}")
    private String issuer;

    @Value("${jwt.expiry}")
    private long expiryMinutes;

    public JwtService(@Lazy JwtEncoder jwtEncoder) {
        this.jwtEncoder = jwtEncoder;
    }

    // =========================================
    // Access Token - Normal Login
    // =========================================

    public String generateAccessToken(
            Authentication authentication
    ) {

        String email = authentication.getName();

        return generateAccessToken(email);
    }


    // =========================================
    // Access Token - Refresh Token Flow
    // =========================================

    public String generateAccessToken(
            String subject
    ) {

        Instant now = Instant.now();

        JwtClaimsSet claims =
                JwtClaimsSet.builder()
                        .issuer(issuer)
                        .subject(subject)
                        .issuedAt(now)
                        .expiresAt(
                                now.plus(
                                        expiryMinutes,
                                        ChronoUnit.MINUTES
                                )
                        )
                        .claim(
                                "authorities",
                                List.of("USER")
                        )
                        .build();

        return jwtEncoder
                .encode(
                        JwtEncoderParameters.from(claims)
                )
                .getTokenValue();
    }


    // =========================================
    // Refresh Token
    // =========================================

    public String generateRefreshToken(
            Authentication authentication
    ) {

        String email = authentication.getName();

        Instant now = Instant.now();

        JwtClaimsSet claims =
                JwtClaimsSet.builder()
                        .issuer(issuer)
                        .subject(email)
                        .issuedAt(now)
                        .expiresAt(
                                now.plus(
                                        7,
                                        ChronoUnit.DAYS
                                )
                        )
                        .claim(
                                "type",
                                "refresh"
                        )
                        .build();

        return jwtEncoder
                .encode(
                        JwtEncoderParameters.from(claims)
                )
                .getTokenValue();
    }


    // =========================================
    // Google OAuth2 Access Token
    // =========================================

    public String generateToken(
            Long userId,
            String email
    ) {

        Instant now = Instant.now();

        JwtClaimsSet claims =
                JwtClaimsSet.builder()
                        .issuer(issuer)
                        .subject(String.valueOf(userId))
                        .issuedAt(now)
                        .expiresAt(
                                now.plus(
                                        expiryMinutes,
                                        ChronoUnit.MINUTES
                                )
                        )
                        .claim("email", email)
                        .claim(
                                "authorities",
                                List.of("USER")
                        )
                        .build();

        return jwtEncoder
                .encode(
                        JwtEncoderParameters.from(claims)
                )
                .getTokenValue();
    }
}