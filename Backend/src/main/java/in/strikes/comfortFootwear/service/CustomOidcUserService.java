package in.strikes.comfortFootwear.service;

import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

import in.strikes.comfortFootwear.model.User;

@Service
public class CustomOidcUserService
        implements OAuth2UserService<OidcUserRequest, OidcUser> {

    private final OidcUserService oidcUserService =
            new OidcUserService();

    private final UserService userService;

    private final JwtService jwtService;

    public CustomOidcUserService(
            UserService userService,
            JwtService jwtService
    ) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @Override
    public OidcUser loadUser(
            OidcUserRequest userRequest
    ) throws OAuth2AuthenticationException {

        OidcUser oidcUser =
                oidcUserService.loadUser(userRequest);

        String provider =
                userRequest
                        .getClientRegistration()
                        .getRegistrationId();

        User user =
                userService.registerOrUpdate(
                        provider,
                        oidcUser
                );

        String token =
                jwtService.generateToken(
                        user.getId(),
                        user.getEmail()
                );

        System.out.println("JWT Generated: " + token);

        return oidcUser;
    }
}
