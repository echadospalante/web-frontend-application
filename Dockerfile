# Build Stage
FROM node:22.15.0-alpine AS build

WORKDIR /app
COPY . .

RUN npm i 

RUN npm run build -f

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
