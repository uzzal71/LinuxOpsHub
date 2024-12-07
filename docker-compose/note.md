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

docker compose -f compose -f compose.yaml up -d

docker compose up
docker compose stop   --> stop all container
docker compose restart --> restart all container
docker compose down --> remove all container
docker compose logs --> simple logs
docker compose ps --> list of container running in compose defined