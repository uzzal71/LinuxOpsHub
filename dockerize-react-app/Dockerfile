FROM node:21.6-alpine3.18
WORKDIR /app
COPY package*.json ./

# Update npm globally and handle retries and timeouts
RUN npm install -g npm@10.9.1 && \
    npm install --retry=3 --timeout=60000

COPY . .
EXPOSE 3000
CMD ["npm", "start"]
