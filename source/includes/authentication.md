
# Authentication

APIs that involve interacting with your organization's data, such as pilots and drones, requires **authentication**. Other APIs such as weather and airspace data only require your API Key.

For authentication, Garuda Plex uses the **[OpenID Connect (OIDC)](https://openid.net/connect/) implicit flow**. Here's how you can add Garuda Plex authentication to your own application:

![oidc_flow](../images/oidc_flow.jpeg)

**(1)** Your application directs the user to **Garuda Plex Identity Service** URL with the required query parameters to allow the user to login to Garuda Plex. Refer to the right for an example. The required parameters are as follows:

> URL Template (contains whitespace for readability):

```
https://<URL>?
  client_id=<CLIENT_ID>&
  redirect_url=<REDIRECT_URL>&
  response_type=<RESPONSE_TYPES>&
  scope=<SCOPES>&
  nonce=<NONCE>
```

> Example URL:

```
https://identity.stg.garuda.io/auth?
  client_id=de5dee51-ded8-43b3-a51d-476545039ecb&
  redirect_uri=https%3A%2F%2Fyour-website%2Fcallback&
  response_type=id_token%20token&
  scope=openid%20email&
  nonce=cf6a9372cad19c4809a325167a519230
```

| Parameter       | Description                                                                                                                                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | The client ID that is provided to you when you register as a developer (provided along with API Key)                                                                                                                                                                                     |
| `redirect_uri`  | Page to return to after successful login. Has to be URL encoded.                                                                                                                                                                                                                         |
| `response_type` | OpenID response type. This will be provided to you when you register as a developer.                                                                                                                                                                                                     |
| `scope`         | OpenID scope. The following are supported: `openid`, `offline_access`, `email`, `profile`, `address`, `plex`                                                                                                                                                                             |
| `nonce`         | A case sensitive string value used to associate a Client session with an ID Token, and to mitigate replay attacks. `nonce` will be returned to the client together with the authorization token.Use the `nonce` to validate the token received against the initial authorization request |

**(2)** Garuda Plex Identity Service will validate your user's credentials.

> Example redirect URL:

```
https://your-website/callback?
  id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpZy1ycy0wIn&
  access_token=eyJ0eXAiOiJKV1QiR5kpXVCIscCI6ILCJhbGciOiJSUzI6InI1NiIsImtpZC&
  expires_in=3600&
  token_type=Bearer&
  session_state=bfefcc5422b376ec61650c6b165f0d758f9a4b741460c72
```

**(3)** If validation is successful, the user will be redirected back to your application via the `redirect_uri`, with the requested tokens attached in the query string of the URL. Use the `access_token` attached to make authenticated calls to Garuda Plex Platform. (*Note: Tokens have been shortened for brevity*)
