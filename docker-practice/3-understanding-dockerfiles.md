### Understanding Dockerfiles
```bash
docker run hello-world
```

Dockerfile ---> build ---> Image crate ---> run ---> container create

### Host Machine to Docker File Copy
```bash
COPY app.py /
```

### Docker to Host Machine File Copy
```bash
RUN cp /tmp/hello.py /tmp/hello.py
```

### Dockerfile build
```bash
docker build . -t apppy
docker images
docker run -d -p 8090:8000 apppy
docker images
```

### Docker image tag add
```bash
docker tag apppy uzzal71/apppy:1.0
docker images
```

### Docker login & push image in dockerhub
```bash
docker login
docker push uzzal71/apppy:1.0
```

### React app dockerfile
```bash
docker exec -it [containerId] bash
```

### Multi Stage Build
# Stage 1: Build the application
FROM node:21.6-alpine3.18 AS builder

# Set the working directory for the build stage
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code into the container
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the final image
FROM nginx:1.20

# Set the working directory within the container
WORKDIR /app

# Copy the built application files from the builder stage to the nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]