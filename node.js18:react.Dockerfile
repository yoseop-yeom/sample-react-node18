FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm ci

ENTRYPOINT npm run start