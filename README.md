# Monorepo based on Next.js and NestJS

### Setup

1. Make sure you have [NodeJS](https://nodejs.org/)  and [Yarn](https://yarnpkg.com/getting-started/install)  and installed.
2. Install your dependencies

    ```
    yarn
    ```

3.  In the `server` project, copy create a `.env` file and copy the values from `.env.example` in order to set up the environment variables.

4. To start the projects run:

    ```
    yarn start
    ```

This will start both the `client` and `server` projects in parallel.
You can access the web application on `http://localhost:3000` and the API on `http://localhost:3000/api`

5. To build the projects run:
    ```
    yarn build
    ```

6. To run the tests run:
    ```
    yarn test
    ```

## Projects

### Client
Our web application is built with [Next.js](https://nextjs.org/). It's a React framework that provides a lot of features out of the box, such as SSR, code splitting, etc.
It also provides a lot of flexibility to customize the build process.

It lives in the `client` folder and is served by our NestJS based backend.

#### What is missing?
1. Unit test setup - Currently we don't have unit tests for the client. We should setup tests by using Jest and React Testing Library. We should
take into account what works best with NextJS.

2. Integration tests setup - Ideally we should also have integration tests for our web app, for this we can use Cypress

Some references:
[Jest](https://jestjs.io/docs/tutorial-react),
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro),
[Cypress](https://www.cypress.io/),
[NextJS Testing](https://nextjs.org/docs/testing)

3. State management and data fetching tools.
   
   a. We can use [React Query](https://react-query-v3.tanstack.com/) in combination with [Axios](https://github.com/axios/axios) for data fetching.
   
   b. For state management we can rely on React Query's powerful caching and use the [Context API](https://reactjs.org/docs/context.html) for state management.
   Alternatively we can use Redux or MobX for more complex state management.

4. Better route management. Currently, NextJS router doesn't support parent/wrapper components for nested routes, so there needs to be a wrapper component each time there is a new route.
There is a new RFC for layouts currently in progress (https://github.com/vercel/next.js/discussions/37136), but for now there will be some code repetition

5. The Trivia Questions API is not ready, so we are using a mock API for now. We should replace it with the real API once it's ready.
We are also using the array indexes as the question IDs, but ideally we should use UUIDs, we should update this when the backend is ready.

### Server
Our backend is built with [NestJS](https://nestjs.com/). It's a Node.js framework that provides a lot of features out of the box, such as dependency injection, a CLI, etc.

#### What is missing?
1. Database. We should do some research on our database and ORM choice. For MongoDB we can use Mongoose.
For an SQL database we can use TypeORM or Prisma (I would exclude Sequelize as it has very limited TypeScript support).
NestJS has various adapters for different databases and ORMs. We should take into account what is best supported
   
   a. We should setup our local database using docker. An example can be found in the `docker-compose.yml` file, which we can use for local dewvelopment.
Other external services can also be added there, such as `localstack`.
   
   b. If using an SQL database, we should only make changes using migrations. For this we need to set up a folder containing the migrations as well as scripts for
running and reverting migrations and also some fixtures to seed the database with initial data.
   
   c. We should use a managed service to host our database, such as `MongoDB Atlas`, `AWS RDS` or Google's `Cloud SQL`


2. We should add document our API with [Swagger](https://docs.nestjs.com)

3. A tool for logging/tracing that will help with catching bugs, error reports and performance monitoring. We can use [Sentry](https://sentry.io/welcome/) or [New Relic](https://newrelic.com/)  for this.

4. We need to add common conventions for response, DTO validation and error handling. This includes creating components, such as exception filters, validation pipes
and adding validation decorators to our DTOs where appropriate.
Some references: [Pipes](https://docs.nestjs.com/pipes), [Validation](https://docs.nestjs.com/techniques/validation), [Exception Filters](https://docs.nestjs.com/exception-filters)
### Packages
The packages folder is responsible for storing shared code between the client and the server. 


#### What is missing?
Currently changes in the packages do not auto-compile and restart the server. 
We need to rebuild the packages on each change.

One way to improve the overall developer experience regarding
the build process and relations between the different apps/packages is to use a monorepo management tool, such as  [NX](https://nx.dev/) or [Turborepo](https://turborepo.org/).
