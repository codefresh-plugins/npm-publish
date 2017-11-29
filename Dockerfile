FROM node:8.8.0

WORKDIR /cli

COPY . .

RUN npm link

CMD ['npm' ,'run', 'release-to-npm']
