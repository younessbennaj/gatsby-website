FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add autoconf automake libtool make tiff jpeg zlib zlib-dev pkgconf nasm file gcc musl-dev \                                                                                     
    && yarn install
COPY . .
EXPOSE 8000