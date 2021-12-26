FROM node:12.22-alpine3.13 as builder

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile

RUN yarn build:api

ENV PORT=80

EXPOSE 80

CMD ["yarn", "run:api:ci"]
