[![Build Status](https://travis-ci.org/telemark/robot-stats.svg?branch=master)](https://travis-ci.org/telemark/robot-stats)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/robot-stats.svg)](https://greenkeeper.io/)

# robot-stats

Robot for collecting stats and posting the results to a stats service.

## Setup

Update docker.env with correct settings

```bash
NODE_ENV=production
SYSTEM_NAME=robot-stats
DIRECTORIES_PATH=test/directories
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
STATS_SERVICE_URL=https://stats.service.t-fk.no/stats
PAPERTRAIL_HOSTNAME=robot-stats
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

## Build

```bash
$ docker build -t robot-stats .
```

## Usage

```
$ docker run --env-file=docker.env --rm robot-stats
```

This will start a container. Do the job. Stop the container and remove it.

## Related

- [micro-stats](https://github.com/telemark/micro-stats)

## License

[MIT](LICENSE)

![Robohash image of robot-stats](https://robots.kebabstudios.party/robot-stats.png "Robohash image of robot-stats")