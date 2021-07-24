# TigerGraph TigerFlow Docker

[![Greenkeeper badge](https://badges.greenkeeper.io/node-red/node-red-docker.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/node-red/node-red-docker.svg?branch=master)](https://travis-ci.org/node-red/node-red-docker)
[![DockerHub Pull](https://img.shields.io/docker/pulls/nodered/node-red.svg)](https://hub.docker.com/r/nodered/node-red/)
[![DockerHub Stars](https://img.shields.io/docker/stars/nodered/node-red.svg?maxAge=2592000)](https://hub.docker.com/r/nodered/node-red/)


available at https://hub.docker.com/r/graphflow/tigerflow.

## Quick Start
To run in Docker in its simplest form just run:

        docker run -it -p 1880:1880 -v tigerflow-data:/data --name myTigerGraphPipeLine graphflow/tigerflow


Let's dissect that command:

        docker run                         - run this container, initially building locally if necessary
        -it                                - attach a terminal session so we can see what is going on
        -p 1880:1880                       - connect local port 1880 to the exposed internal port 1880
        -v tigerflow-data:/data            - mount the host node_red_data directory to the container /data directory so any changes made to flows are persisted
        --name myTigerGraphPipeLine        - give this machine a friendly local name
        graphflow/tigerflow                - the image to base it on 
