FROM node:18-alpine

EXPOSE 8000

RUN mkdir /code

ADD . /code

RUN apk add yarn

WORKDIR /code

CMD ["yarn", "start"]
