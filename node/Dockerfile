FROM node:18-alpine3.15

RUN mkdir -p /work

WORKDIR /work

COPY ./app .

RUN npm i

EXPOSE 3000

CMD [ "node", "app.js" ]
