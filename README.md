[![MIT License][license-shield]][license-url]

# fastify-bookmarkly

## Table of Contents

- [About](#about)
  - [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## About

**fastify-bookmarkly** is an example backend API using the [Fastify][fastify] framework, MongoDB, and a [clean architecture][clean].

Parts of the original code are from Bill Sourour's [DevMastery Comments Microservice API][clean-micro] and [Clean RESTful API with Node.js][clean-node].

The project is a learning repository where I explore how to code a "clean" Node API from scratch.

### Built With

- Node.js & [Fastify][fastify]
- Docker & Docker Compose
- MongoDB
- [Apollo Server](https://github.com/apollographql/apollo-server)

## Installation

Prerequisites:

- Node.js
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

1. Clone the repository:

```bash
$ git clone git@github.com:sophiabrandt/fastify-bookmarkly.git && cd fastify-bookmarkly
```

2. Adjust configuration

Rename `.env.example` to `.env` and adjust the variables to your liking

Check the `config` folder and change the name of variables as needed.

3. Use Docker and Docker Compose to spin up the Mongo Database.

```bash
$ docker-compose up -d
```

4. Install dependencies

```bash
$ pnpm install # or npm install
```

## Usage

```bash
$ pnpm run start:dev # or npm run start:dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Copyright © 2020 Sophia Brandt  
[MIT Licence](LICENSE)

## Acknowledgments

- Bill Sourour for [DevMastery Comments Microservice API][clean-micro] and [Clean RESTful API with Node.js][clean-node]

[license-shield]: https://img.shields.io/badge/License-MIT-green.svg?style=flat-square
[license-url]: https://github.com/sophiabrandt/fastify-bookmarkly/blob/master/LICENSE
[fastify]: https://www.fastify.io/
[clean]: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
[clean-micro]: https://github.com/dev-mastery/comments-api
[clean-node]: https://github.com/arcdev1/mm_express_api_example
