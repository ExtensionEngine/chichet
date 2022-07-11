#!/bin/sh

set -ex

dir=$1
shift

cd $dir
pnpm $@
docker-compose down || true
docker image remove chichet_$dir || true
docker-compose up