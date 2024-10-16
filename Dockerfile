FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy only the package files first to take advantage of Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 9003 
# Start the application
CMD ["npm", "run", "dev"]
