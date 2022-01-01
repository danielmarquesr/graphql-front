FROM node:17-alpine

EXPOSE 8000

RUN mkdir /code

ADD . /code

RUN apk add yarn

WORKDIR /code

CMD ["yarn", "start"]
