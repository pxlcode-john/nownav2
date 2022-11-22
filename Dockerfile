FROM node:16-bullseye-slim AS frontend-base
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin$PATH
COPY package*.json ./
RUN npm install
CMD ["npm", "start"]