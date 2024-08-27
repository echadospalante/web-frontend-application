# Build Stage
FROM node:20.9.0-alpine AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i 

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
