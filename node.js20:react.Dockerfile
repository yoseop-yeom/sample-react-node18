FROM node:20-alpine

WORKDIR /app
COPY . .

RUN npm ci

ENTRYPOINT npm run start