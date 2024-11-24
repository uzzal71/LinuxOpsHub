### Docker create a mongo-network & run mongo image attach with mongo-network 
```base
docker network ls
docker network create mongo-network
docker network ls

docker run -d \
-p 27019:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=admin \
--network mongo-network \
--name mongodb \
monngo

docker ps

docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=admin \
-e ME_CONFIG_MONGODB_SERVER=mongodb
--network mongo-network \
--name mongo-express \
mongo-express

docker ps
http://localhost:8081
docker logs [mongo-express containerId] that show username & password
```