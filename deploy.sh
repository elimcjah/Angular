#!/bin/sh

npm run dist
rsync -avr --exclude dist/node_modules --exclude node_modules ./dist/ app1:/opt/panther/dist
scp package-prod.json app1:/opt/panther/dist/package.json
ssh app1 'cd /opt/panther/dist; npm install'
ssh app1 'pm2 restart index'
