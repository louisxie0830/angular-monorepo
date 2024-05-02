FROM node:20-buster-slim as builder

WORKDIR /app

RUN apt-get update && \
  apt-get install -y --no-install-recommends git python make build-essential libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  npm set progress=false && \
  npm config set depth 0

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npx nx reset && npx nx run-many --target=build --all


FROM ghcr.io/rookie-luochao/nginx-runner:latest

COPY nginx.default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
