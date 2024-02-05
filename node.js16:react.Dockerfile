FROM node:16-alpine

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

ENV START_COMMAND="npx serve -sn build"
ENTRYPOINT ${START_COMMAND}

## CC. infinity loop for docker container exec
#ENTRYPOINT while :; do echo 'Press <CTRL+C> to exit.'; sleep 1; done