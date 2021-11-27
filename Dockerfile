FROM node:16
WORKDIR /usr/src/mucaad_week1
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 3031
CMD [ "nodemon"]