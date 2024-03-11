# Wildfly JAX-RS OIDC

Example project for Keycloak OIDC authentication for JAX-RS resources in WildFly Server

- This project uses bearer only authentication for resource server
- Vue 3 app is used to make API call to the secure endpoints

## Build and Run Application

- Navigate to resource-client project and run mvn install
```bash
cd resource-server
mvn clean install
```
- Navigate to dist docker folder and run docker container that will start Database for Keycloak, Keycloak Server and Wildfly Server.
```bash
cd ./wildfly-dist/docker
docker-compose up --build
```
- Run the frontend server using npm
```bash
cd frontend-ui
npm i
npm run dev
```

## Configuring Keycloak Server

- Visit http://auth_server:8180/
- Login using username `admin` and password `admin`
- Create Realm named `wildfly`
- Navigate to the realm `wildfly`
- Create client `resource-client`
  - Deselect `Client Authentication`, `Authorization` and `All Authentication Flow`
  - Provide `http://localhost:8080` as value for field in `Root URL`, `Home URL`
  - Click `Save`
- Create client `frontend-client`
  - Deselect `Client Authentication` and `Authorization`
  - Select `Standard Flow` and `Direct access grant` for `Authentication Flow`
  - Provide `http://localhost:5173/*` as value for `Valid Redirect URIs`
  - Provide `http://localhost:5173` as value for `Web Origins` (This prevents CORS issue from the vue oidc-client-ts calls)
  - Click `Save`
  - Select `Advanced` tab and choose `S256` value for `Proof Key for Code Exchange Code Challenge Method` and Click `Save`
- Create new User
  - Navigate to Users tab. Click `Create new user` 
  - Provide `test` as value for `Username`
  - Provide `Test` as value for `First Name`
  - Provide `User` as value for `Last Name`
  - Click `Create`
  - Switch tab to `Credentials` and click `Set password`
  - Provide password as `testuser` and deselect `Temporary`

## Calling Secure Endpoint from Vue UI

- Visit http://localhost:5173/
- Click Fetch on the Get Open Message. This will show an alert box with the open message and does not require logging in
- Click `Login` and login with the user we created
- Click Fetch on the Get Admin Message. This will show an alert box with the admin message and requires logging in

## Helpful Screenshots
![WildflyJaxrsOIDC (1).png](screenshots%2FWildflyJaxrsOIDC%20%281%29.png)
![WildflyJaxrsOIDC (2).png](screenshots%2FWildflyJaxrsOIDC%20%282%29.png)
![WildflyJaxrsOIDC (3).png](screenshots%2FWildflyJaxrsOIDC%20%283%29.png)
![WildflyJaxrsOIDC (4).png](screenshots%2FWildflyJaxrsOIDC%20%284%29.png)
![WildflyJaxrsOIDC (5).png](screenshots%2FWildflyJaxrsOIDC%20%285%29.png)
![WildflyJaxrsOIDC (6).png](screenshots%2FWildflyJaxrsOIDC%20%286%29.png)
![WildflyJaxrsOIDC (7).png](screenshots%2FWildflyJaxrsOIDC%20%287%29.png)
![WildflyJaxrsOIDC (8).png](screenshots%2FWildflyJaxrsOIDC%20%288%29.png)
![WildflyJaxrsOIDC (9).png](screenshots%2FWildflyJaxrsOIDC%20%289%29.png)
![WildflyJaxrsOIDC (10).png](screenshots%2FWildflyJaxrsOIDC%20%2810%29.png)
![WildflyJaxrsOIDC (11).png](screenshots%2FWildflyJaxrsOIDC%20%2811%29.png)
![WildflyJaxrsOIDC (12).png](screenshots%2FWildflyJaxrsOIDC%20%2812%29.png)
![WildflyJaxrsOIDC (13).png](screenshots%2FWildflyJaxrsOIDC%20%2813%29.png)
![WildflyJaxrsOIDC (14).png](screenshots%2FWildflyJaxrsOIDC%20%2814%29.png)
![WildflyJaxrsOIDC (15).png](screenshots%2FWildflyJaxrsOIDC%20%2815%29.png)
![WildflyJaxrsOIDC (16).png](screenshots%2FWildflyJaxrsOIDC%20%2816%29.png)
![WildflyJaxrsOIDC (17).png](screenshots%2FWildflyJaxrsOIDC%20%2817%29.png)
![WildflyJaxrsOIDC (18).png](screenshots%2FWildflyJaxrsOIDC%20%2818%29.png)
![WildflyJaxrsOIDC (19).png](screenshots%2FWildflyJaxrsOIDC%20%2819%29.png)
