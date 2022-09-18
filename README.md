# Monorepo based on Next.js and NestJS

### Setup

1. Make sure you have [NodeJS](https://nodejs.org/)  and [Yarn](https://yarnpkg.com/getting-started/install)  and installed.
2. Install your dependencies

    ```
    yarn
    ```

3. To start the projects run:

    ```
    yarn start
    ```
This will start both the `frontend` and `backend` projects in parallel.
You can access the frontend on `http://localhost:4001` and the backend on `http://localhost:3001`


**NOTE:** In order to access the web app from the Node.js server, you need to build the frontend app first with `yarn build`.

4. To build the projects run:
    ```
    yarn build
    ```

5. To run the tests run:
    ```
    yarn test
    ```

## Projects

### Client
Our web application is built with [Next.js](https://nextjs.org/). It's a React framework that provides a lot of features out of the box, such as SSR, code splitting, etc.
It also provides a lot of flexibility to customize the build process.

It lives in the `client` folder and is served by our NestJS based backend.

### Server
Our backend is built with [NestJS](https://nestjs.com/). It's a Node.js framework that provides a lot of features out of the box, such as dependency injection, a CLI, etc.


### Packages
The packages folder is responsible for storing shared code between the client and the server. 


#### Limitations
Currently changes in the packages do not auto-compile and restart the server. 
We need to rebuild the packages on each change.

One way to improve the overall developer experience regarding
the build process and relations between the different apps/packages is to use a monorepo management tool, such as  [NX](https://nx.dev/) or [Turborepo](https://turborepo.org/).
