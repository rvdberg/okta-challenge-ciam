# Okta Challenge - Pizza 42

This project is a combination of Create-React-App and Vercel Serverless functions.  
It's current hosted at Vercel with url: https://okta-challenge-ciam.vercel.app/

## To start

Start with `pnpm install`

After creating a new .env file `touch .env` and filling out the variables based on the example file [.env.local.example](.env.local.example) you can run the app locally with

### `pnpm exec vercel dev`

**if that doesn't work than most likely Vercel doesn't allow unathorized access ;), sorry haven't tested this**

Luckily the project is running live at [Pizza 42 Prod](https://okta-challenge-ciam.vercel.app/)!

## Additional info
Client and resource server configuration can be found [here](./auth0%20environment/Clients.md)  
Auth0 Action used for enriching the ID token with order history is [here](./auth0%20environment/Enrich-ID%20action.js)

I've set the Auth0 React config to store the tokens in local cache for ease of access for demonstration (and development) purposes.


## Features

- Customer can signup and login (including Google social)
- EmailAddress verification needed before ordering is allowed
- API needs valid Access Token including the correct scopes
- Valid order is stored in User's app_metadata
- Custom data for Pizza42 app is added to the ID token
- Some unintended bugs that may be regarded as features 🙈
---
Best,  
Rutger van den Berg