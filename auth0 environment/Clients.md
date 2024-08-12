# Applications

### Pizza 42 Spa:

- clientid: YLY1hOV0d9oeU8skJpAPVWDTvb4PCN91
- type: SPA
- grants: code, refresh
- metadata: [logical_name, 'pizza42']
- Refresh token rotate enabled
- app login uri: https://okta-challenge-ciam.vercel.app/login
- callback: https://okta-challenge-ciam.vercel.app/callback
- logout and wo: https://okta-challenge-ciam.vercel.app


### Pizza42 Api (M2M);

- clientid: 2yR8GunXcuzrPgmBo5W998huQH4w1slv
- type: M2M
- grants: client-credentials
- scopes: read:users, update:users on management api


# API's

### Pizza42 Api:

- identifier: urn:rcb:pizza42
- token exp: 3600
- allow_skip, allow_offline
- permissions: read:orders, create:orders 

