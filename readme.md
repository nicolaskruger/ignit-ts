# node

## npm

utilizar `npm v 14.17.0`

## docker

```bash
# cria container
sudo docker build -t rentx .
# mostra processos
sudo docker ps
# roda container
sudo docker run -p 3333:3333 rentx
# remover container
sudo docker rm <id>
# iniciar container
sudo docker start <id>
# parar
sudo docker stop <id>
# acessar o container
sudo docker exec -it <name/id> /bin/bash
# logs
sudo docker logs -f
```

## docker-compose

```bash
# subir
sudo docker-compose up
# subir background
sudo docker-compose up -d
# parar
sudo docker-compose stop
# remover comtainer
sudo docker-compose down
```

## typeorm

```bash
# create
npx typeorm migration:create -n <name>
# run
npx ts-node ./node_modules/.bin/typeorm migration:run -d <datasource.ts>
# revert
npx ts-node ./node_modules/.bin/typeorm migration:revert -d <datasource.ts>
```

## local postgress

```bash
# stop
systemctl stop postgresql

```
