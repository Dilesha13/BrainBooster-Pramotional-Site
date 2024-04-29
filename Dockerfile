# Step 1: Use an official Node.js image as the base
FROM node:20 as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the application for production
RUN npm run build

# Step 7: Use the same Node.js image for the runtime environment
FROM node:20

# Step 8: Set the working directory in the new image
WORKDIR /app

# Step 9: Install 'serve' to serve the static files
RUN npm install -g serve

# Step 10: Copy the build artifacts from the previous stage
COPY --from=build /app/dist /app

# Step 11: Expose port 8080 to the outside world
EXPOSE 8080

# Step 12: Start the server to serve the static files
CMD ["serve", "-s", "/app", "-l", "8080"]
