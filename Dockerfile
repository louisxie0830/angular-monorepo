FROM node:20-buster as builder

WORKDIR /app
RUN apt-get update && apt-get install git python make build-essential -y

RUN npm install -g node-gyp
RUN rm -f package-lock.json
RUN rm -rf ./dist

COPY package.json ./
ENV NPM_CONFIG_LOGLEVEL error

RUN npm i nx -g
RUN npm i

COPY . .

RUN nx run host:build:production --baseHref=/apps/host/

FROM nginx:alpine
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8080
