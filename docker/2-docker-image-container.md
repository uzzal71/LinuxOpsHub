## Docker image & container
```bash
docker
docker run hello-world
docker run nginx
docker run -p 80:80 nginx
docker run -p 8090:80 nginx
docker run -p 8091:80 nginx
docker run -d -p 8090:80 nginx
docker run -d -p 8091:80 nginx
docker ps
docker ps -a
docker run -d --name nginx1 -p 8090:80 nginx
docker run -d --name nginx2 -p 8091:80 nginx
docker ps
docker ps -a
docker ps
docker stop containerId or containerName
docker ps
docker ps -a
docker rm containerId or containerName
docker ps
docker ps -al
docker system prune
docker ps -a
docker run -d --name nginx3 -p 8090:80 nginx
docker ps
```

```bash
docker exec -t containerId or containerName bash
ls
cat /etc/os-release
apt update && apt install vim -y
ls
vim hello.txt
"hello world!"
ls
realpath hello.txt
exit
```

### Host To Docker OR Docker to Host
```bash
docker cp
docker ps
docker cp nginx1:/hello.txt . [source--> nginx1:/hello.txt, target: . or /tmp/]
vim hello.txt
vim hello2.txt
docker cp hello2.txt nginx1:/
docker exec -t containerId or containerName bash
ls
cd /etc
cd /nginx
ls
cd conf.d/
default.conf
vim default.conf
exit
```

### html file cerate inside vm    
```bash
vim class2.html
<h1>hello world! class2</h1>
docker cp class2.html nginx1:/usr/share/nginx/html/
open browser
[ip-address or localhost]:8090/class2.html
```

## Running container image create inside VM or Host machine
```bash
docker commit nginx1 nginx1-v1
docker images
docker run -d -p 8092:80 nginx1-v1
docker ps
open browser
[ip-address or localhost]:8092/class2.html
```

### Image save
```bash
ls
docker save nginx1-v1 | gzip > nginx1-v1.tar.gz
ls
du -sh nginx1-v1.tar.gz
docker ps
docker rm -f containerId or containerName
docker ps
docker images
docker rmi imageId
docker
```
### Image load
```bash
docker load -i nginx1-v1.tar.gz
docker images
docker run -d  --name imported-cont -p 8090:80 nginx1-v1
docker ps
open browser
[ip-address or localhost]:8090/class2.html
```

### VM Or Host Machine reboot
```bash
reboot
reboot success then connect again
docker ps
container kill show
```
### Container restart auto when system reboot
```bash
docker run -d  --name imported-cont --restart=always -p 8090:80 nginx1-v1
docker ps
reboot
reboot success then connect again
docker ps
```

### Docker Logs
```bash
docker logs containerId or containerName
docker logs -f containerId or containerName
```