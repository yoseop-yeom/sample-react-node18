FROM node:20-alpine

WORKDIR /app

# package-lock.json 은 빌드된 노드버전을 정확히 맞춰야 한다. 따라서 범용성을 위해 패키지로 인스톨만 진행
# 샘플이 아닌 운영 프로젝트인 경우 정확한 버저닝을 위해 lock 를 활용할 수도 있다.
COPY package.json .
RUN npm i

COPY src src
COPY public public
RUN npm run build

ENV START_COMMAND="npx serve -sn build"
ENTRYPOINT ${START_COMMAND}

## CC. infinity loop for docker container exec
#ENTRYPOINT while :; do echo 'Press <CTRL+C> to exit.'; sleep 1; done