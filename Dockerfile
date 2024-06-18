FROM node:20.3.0

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "src/index.js"]