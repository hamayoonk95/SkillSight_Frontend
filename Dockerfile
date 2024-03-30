FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY SkillSight_Frontend/package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY SkillSight_Frontend/ .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]