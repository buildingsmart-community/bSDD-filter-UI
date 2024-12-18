/**
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export declare const b2cPolicies: {
    names: {
        signUpSignIn: string;
        forgotPassword: string;
        editProfile: string;
    };
    authorities: {
        signUpSignIn: {
            authority: string;
        };
        forgotPassword: {
            authority: string;
        };
        editProfile: {
            authority: string;
        };
    };
    authorityDomain: string;
};
/**
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export declare const msalConfig: {
    auth: {
        clientId: string;
        authority: string;
        knownAuthorities: string[];
        redirectUri: string;
        postLogoutRedirectUri: string;
        navigateToLoginRequestUrl: boolean;
    };
    cache: {
        cacheLocation: string;
        storeAuthStateInCookie: boolean;
    };
    system: {
        loggerOptions: {
            loggerCallback: (level: any, message: any, containsPii: any) => void;
        };
    };
};
/**
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export declare const loginRequest: {
    scopes: string[];
};
