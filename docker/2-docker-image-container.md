## Docker image & container
### testing docker
```bash
docker run hello-world
```

### docker run nginx
```bash
docker run nginx
docker run -p 80:80 nginx
```

### Port Mapping
```bash
-p 80:80
first 80 forward host ubuntu
second 80 forwad container
Port Mapping
```

```bash
docker run -p 8090:80 nginx
ip:8090
```

### docker daemon
```bash
docker run -d -p 8090:80 nginx
docker ps
```

### container name
```bash
docker run -d --name mynginx -p 8090:80 nginx
docker ps
```

### total container
```bash
docker ps -a
```

### Stop docker container
```bash
docker stop [containerId or containerName]
docker ps -al
```

### Delete docker container
```bash
docker rm [containerId or containerName]
docker system prune # remove all container
doker ps
```

### Enter container
```bash
docker exec -it [containerId or containername] bash
# interactive mode --> -it
ls
apt update && sudo apt upgrade -y
vim hello.txt
realpath hello.txt
```

### File copy docker to host machine
```bash
docker cp mynginx:/hello.txt .
vim devops.txt
docker cp docker.txt mynginx
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```