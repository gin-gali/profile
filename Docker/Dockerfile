FROM node:14.17.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk update \
    && npm install -g npm@6.14.13 \
    && npm install