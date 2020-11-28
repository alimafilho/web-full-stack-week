FROM node:alpine
# FROM node:13.6.0-alpine

MAINTAINER  Antonio Lima <toni.adlf@hotmail.com>

WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY . .

# RUN node_modules/.bin/sequelize db:create
# RUN node_modules/.bin/sequelize db:migrate
# RUN node_modules/.bin/sequelize db:seed:all

EXPOSE 5000

CMD ["npm", "start"]

#https://docs.docker.com/develop/develop-images/dockerfile_best-practices/