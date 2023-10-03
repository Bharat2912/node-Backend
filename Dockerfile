FROM node:18.18-alpine 
WORKDIR /opt/
COPY . .
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]