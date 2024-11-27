FROM node:21-alpine

WORKDIR /app

ENV PORT=3000
ENV APP_URL=http://localhost:3000

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "prod"]
