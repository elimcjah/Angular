#!/bin/sh

npm run dist
ssh app1 'pm2 restart index'
