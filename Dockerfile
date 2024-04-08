FROM node:20-buster as builder
RUN node --version
RUN npm --version
WORKDIR /app

RUN apt-get update && \
  apt-get install -y git python make build-essential && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*


COPY package.json package-lock.json ./

RUN npm set progress=false && \
  npm config set depth 0 && \
  npm ci

COPY . .

RUN npx nx run host:build:production --baseHref=/apps/host/

FROM nginx:alpine
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080
