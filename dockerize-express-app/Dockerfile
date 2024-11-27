FROM node:21-alpine

WORKDIR /app

ENV PORT=3002
ENV APP_URL=http://localhost

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
