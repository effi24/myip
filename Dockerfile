FROM node:17-alpine
WORKDIR /localIp
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
