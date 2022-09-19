FROM node:18-alpine As build

WORKDIR /app

# Copy required files form the top level folder
COPY package.json .
COPY yarn.lock .

# Copy server related files
COPY ./server/src ./server/src
COPY ./server/package.json ./server/package.json
COPY ./server/tsconfig.json ./server/tsconfig.json
COPY ./server/tsconfig.build.json ./server/tsconfig.build.json

# Copy client related files
COPY ./client/src ./client/src
COPY ./client/public ./client/public
COPY ./client/package.json ./client/package.json
COPY ./client/tsconfig.json ./client/tsconfig.json
COPY ./client/next.config.mjs ./client/next.config.mjs
COPY ./client/postcss.config.js ./client/postcss.config.js
COPY ./client/tailwind.config.js ./client/tailwind.config.js
COPY ./client/next-env.d.ts ./client/next-env.d.ts

# Copy packages folder

COPY ./packages ./packages

# berry version is needed to use the workspaces feature
RUN yarn set version berry
RUN yarn plugin import workspace-tools
COPY .yarnrc.yml .

RUN yarn install --immutable
RUN yarn build


# Create the production image
# Only keep files and dependencies that are required in production
# Use a slim/alpine base image to reduce the number of vulnerabilities
FROM node:18-slim

USER node

ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=https://nextjs-app-mnivlgeayq-ue.a.run.app/api
# The port is passed from Cloud Run directly. Usually 8080
#ENV PORT=8080


# Copy required top level files
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/package.json ./package.json

# Copy required client files
COPY --chown=node:node --from=build /app/client/.next ./client/.next
COPY --chown=node:node --from=build /app/client/next.config.mjs ./client/next.config.mjs
COPY --chown=node:node --from=build /app/client/node_modules ./client/node_modules
COPY --chown=node:node --from=build /app/client/package.json ./client/package.json

# Copy required server files
COPY --chown=node:node --from=build /app/server/dist ./server/dist
COPY --chown=node:node --from=build /app/server/node_modules ./server/node_modules
COPY --chown=node:node --from=build /app/server/package.json ./server/package.json


# Start the server using the production build
CMD [ "node", "server/dist/main.js" ]
