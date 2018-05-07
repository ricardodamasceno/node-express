FROM node:latest
MAINTAINER Ricardo Damasceno
COPY ./ /ricardo/docker-images
WORKDIR /ricardo/docker-images
RUN npm install
ENTRYPOINT npm start
EXPOSE 5000