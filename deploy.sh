#!/bin/sh
npm run build
rsync -avr ./dist/ aws:/home/ubuntu/angular_project/dist/
rsync -avr ./server-src/ aws:/home/ubuntu/angular_project/server-src/
rsync -arv ./www/ aws:/home/ubuntu/angular_project/www/
scp package.json aws:/home/ubuntu/angular_project/package.json
ssh aws 'cd /home/ubuntu/angular_project/; npm install --prod'
ssh aws 'pm2 restart index; pm2 show index'
