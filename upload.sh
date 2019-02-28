#!/bin/bash

sudo mount.davfs https://neocities.org/webdav ~/nww -o rw,uid=lbs
rsync -vvzh --progress --delete --bwlimit=100 ./dist/ ~/nww/
