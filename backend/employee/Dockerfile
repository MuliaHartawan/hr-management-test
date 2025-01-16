# Base image
FROM node:10-alpine

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Command to start the app
CMD ["npm", "start"]
