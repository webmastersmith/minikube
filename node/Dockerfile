FROM node:18-alpine3.15
# RUN 'apt-get -y install coreutils'
RUN mkdir -p /work
WORKDIR /work
COPY ./hello .
RUN npm i
EXPOSE 3000
CMD [ "node", "app.js" ]
