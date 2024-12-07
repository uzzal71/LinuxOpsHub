mkdir example-compose-docker
app.py
Dockerfile
docker-compose-yml
requirements.txt
docker compose up -d
docker compose ps

docker ps
docker exec -it [containerId] sh ---> web
docker inspect [containerId] ---> redis