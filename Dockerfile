FROM node:15.8.0

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

USER node

CMD [ "node", "index.js" ]
