FROM node:14
WORKDIR C:\JsLearning\test\get.js
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npx", "mocha" ]
