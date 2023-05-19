## Installation

```bash
version: "3"
services:
  db:
    image: mariadb
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
      MYSQL_DATABASE: account_service
    volumes:
      - account_service_data:/var/lib/mysql
    ports:
      - 3306:3306

  db2:
    image: mariadb
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
      MYSQL_DATABASE: withdraw_service
    volumes:
      - withdraw_service_data:/var/lib/mysql
    ports:
      - 3307:3306

  db3:
    image: mariadb
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
      MYSQL_DATABASE: deposit_service
    volumes:
      - deposit_service_data:/var/lib/mysql
    ports:
      - 3308:3306

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    restart: always
    ports:
      - 8081:80
    environment:
      PMA_HOST: db
      PMA_ARBITRARY: 1
      PMA_HOSTS: |
        db:db
        db2:db2
        db3:db3
      MYSQL_ROOT_PASSWORD: 123456

  zookeeper:
    image: wurstmeister/zookeeper
    container_name: zookeeper-microservice
    ports:
      - "2181:2181"
    environment:
      - ZOO_MY_ID=1
      - ZOO_SERVERS=server.1=zookeeper:2888:3888

  kafka1:
    image: wurstmeister/kafka
    container_name: kafka1-microservice
    ports:
      - "9092:9092"
    environment:
      - KAFKA_BROKER_ID=1
      - KAFKA_LISTENERS=PLAINTEXT://kafka1:9092
      - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092
      - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_CREATE_TOPICS=test_topic:1:3

  kafka2:
    image: wurstmeister/kafka
    container_name: kafka2-microservice
    ports:
      - "9093:9092"
    environment:
      - KAFKA_BROKER_ID=2
      - KAFKA_LISTENERS=PLAINTEXT://kafka2:9092
      - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9093
      - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181

  kafka3:
    image: wurstmeister/kafka
    container_name: kafka3-microservice
    ports:
      - "9094:9092"
    environment:
      - KAFKA_BROKER_ID=3
      - KAFKA_LISTENERS=PLAINTEXT://kafka3:9092
      - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9094
      - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181

  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    container_name: kafka-ui-microservice
    ports:
      - "8080:8080"
    environment:
      - KAFKA_CLUSTERS_0_NAME=local
      - KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS=kafka1:9092,kafka2:9092,kafka3:9092
      - KAFKA_CLUSTERS_0_ZOOKEEPER=zookeeper:2181
      - KAFKA_CLUSTERS_0_ENABLEDELETE_TOPIC=true

volumes:
  account_service_data:
  withdraw_service_data:
  deposit_service_data:

```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
