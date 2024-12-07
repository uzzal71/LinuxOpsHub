mkdir nginx-volumes
cd nginx-volumes
mkdir data
chmod 777 -Rf data/

realpath data/
/home/uzzal/Desktop/LinuxOpsHub/docker-network-and-volume/nginx-volumes/data

docker run -d -p 8090:80 --name=nginx-server -v /home/uzzal/Desktop/LinuxOpsHub/docker-network-and-volume/nginx-volumes/data:/usr/share/nginx/html nginx
docker ps
create a index.html file in nginx-volumes/data/index.html
http://localhost:8090

docker ps
docker exec -it [containerId] bash
cd /usr/share/nginx/html/
touch index2.html
you can see index2.html file in nginx-volumes/data/index2.html

docker volume ls
docker volume create nginx-vol
docker volume ls
docker inspect nginx-vol
docker run -d -p 8090:80 --name=nginx-server -v nginx-vol:/usr/share/nginx/html nginx

docker ps
docker exec -it [containerIn] bash
cd /usr/share/nginx/html
touch index2.html
