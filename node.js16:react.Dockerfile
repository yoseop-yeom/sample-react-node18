FROM node:16-alpine

WORKDIR /app
COPY . .

RUN npm ci

ENTRYPOINT npm run start