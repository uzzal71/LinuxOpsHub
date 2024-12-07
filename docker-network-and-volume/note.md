mkdir nginx-volumes
cd nginx-volumes
mkdir data
chmod 777 -Rf data/

realpath data/
/home/uzzal/Desktop/LinuxOpsHub/docker-network-and-volume/nginx-volumes/data

docker run -d -p 8090:80 --name=nginx-server -v /home/uzzal/Desktop/LinuxOpsHub/docker-network-and-volume/nginx-volumes/data:/usr/share/nginx/html nginx
docker ps