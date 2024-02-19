#!/bin/bash

BUILD_NAME=sample-react-node18

docker stop $BUILD_NAME
docker rmi $BUILD_NAME
docker build -t $BUILD_NAME . 2>&1 || exit

# foreground -> script exit = docker process stop
docker run --rm -p 3000:3000 --name $BUILD_NAME $BUILD_NAME

#docker run --rm -p 3000:3000 -v ./:/app --name $BUILD_NAME $BUILD_NAME

# background -> must docker stop manually for process exit
# docker run -d --rm -p 3000:3000 --name $BUILD_NAME $BUILD_NAME