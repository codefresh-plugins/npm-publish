FROM node:11.9.0-alpine

WORKDIR .

COPY . .

RUN ["npm", "install"]

RUN ["npm", "install", "--save-dev", "ci-publish"]

ENTRYPOINT ["node","npm-publish.js"]


