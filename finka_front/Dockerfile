FROM ubuntu:latest

COPY *.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["top", "-b"]