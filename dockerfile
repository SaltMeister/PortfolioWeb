FROM node:18-alpine as react-build

WORKDIR /portfolio

COPY ./portfolio/public ./public
COPY ./portfolio/src ./src

COPY ./portfolio/package.json ./portfolio/package-lock.json ./

RUN npm install

CMD ["npm", "start"]