docker run \
-it \
-v $PWD:/app:z \
-w "/app" \
-p 8080:8080 \
node:lts \
npm install && npm run start:dev