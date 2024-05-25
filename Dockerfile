#creamos una variable
ARG PORT=3000

#traernos la imagen de node con alpine
FROM node:lts-alpine3.20

#label para agregar metadatos
LABEL autor="OCA"

#Creamos el directorio de la app
WORKDIR /app

#copiamos el archivo a nuestra carpeta

COPY package*.json ./

#instalamos dependencias durante el build

RUN npm install 

#copiamos todo al directorio de trabajo
COPY . .

#exponemos el puerto
EXPOSE ${PORT}

#corremos el comandos para inciar app
CMD ["npm", "start"]



