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