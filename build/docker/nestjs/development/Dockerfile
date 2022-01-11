FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm config set legacy-peer-deps true

RUN npm install

CMD ["npm", "run", "start:dev"]
