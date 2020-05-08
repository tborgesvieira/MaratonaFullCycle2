FROM node:12.14.0-alpine3.11 as base
WORKDIR /app
EXPOSE 3000

COPY ./dist ./dist
COPY ./peer ./peer
COPY package.json .

RUN npm install

CMD [ "npm", "run", "start:prod" ]