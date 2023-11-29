export const oktaConfig = {
    clientId: '0oadcm0ibmfwn0Q9L5d7',
    issuer: 'https://dev-68727149.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}