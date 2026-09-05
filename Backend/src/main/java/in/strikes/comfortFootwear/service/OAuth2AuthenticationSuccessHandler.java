package in.strikes.comfortFootwear.service;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import in.strikes.comfortFootwear.model.User;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class OAuth2AuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final UserService userService;
    private final JwtService jwtService;

    public OAuth2AuthenticationSuccessHandler(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,Authentication authentication) throws IOException, ServletException {

        OidcUser oidcUser = (OidcUser) authentication.getPrincipal();

        String provider = "google";

        User user = userService.registerOrUpdate(provider, oidcUser);

        String accessToken = jwtService.generateToken(user.getId(), user.getEmail());
        String refreshToken = jwtService.generateRefreshToken(user.getId(), user.getEmail());

        // System.out.println("OAuth2 JWT: " + token);

        response.sendRedirect("http://localhost:5173/oauth2/success#accessToken="+accessToken + "&refreshToken="+refreshToken);
    }
}
