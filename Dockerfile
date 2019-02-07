FROM node:11.9.0-alpine

WORKDIR .

COPY . .

RUN ["npm", "install"]

ENTRYPOINT ["node","npm-publish.js"]


