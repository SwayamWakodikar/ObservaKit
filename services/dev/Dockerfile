FROM node:alpine3.23
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "log-generator/generator.js"]
