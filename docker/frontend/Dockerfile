FROM node:18.17.0-slim

ENV TZ Asia/Tokyo

WORKDIR /app

RUN apt-get update \
  && apt-get install -y git\
  && npm install -g firebase-tools

