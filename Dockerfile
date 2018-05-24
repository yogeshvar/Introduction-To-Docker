FROM node:7

# Create app directory

RUN mkdir -p /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /app

WORKDIR /app 

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
COPY . /app


CMD ["npm","start"]

EXPOSE 8080