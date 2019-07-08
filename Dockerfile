FROM node:12-alpine

LABEL maintainer 'Sxip'

WORKDIR /usr/src/nil
COPY package.json yarn.lock ./

RUN yarn

COPY . .
CMD [ "yarn", "start" ]