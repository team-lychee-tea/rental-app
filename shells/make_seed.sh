#!/bin/bash

docker exec firebase mkdir dump

docker exec firebase firebase emulators:export dump

cp -R -f ./docker/firebase/src/dump/* ./seed/

docker exec firebase rm -rf dump
