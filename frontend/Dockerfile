FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install   # Agora deve instalar sem erro

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
