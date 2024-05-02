# Use a specific version of node on Debian Buster slim for better security and stability
FROM node:20-buster-slim AS builder

# Set the working directory
WORKDIR /app

# Install necessary system dependencies securely
RUN apt-get update && \
  apt-get install -y --no-install-recommends git python make g++ && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies using npm ci
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npx nx reset && npx nx run-many --target=build --all

# Use an Nginx Alpine image for serving the content
FROM nginx:alpine

# Set non-root user and expose port 80
RUN addgroup -g 1001 -S appuser && \
  adduser -S -D -H -u 1001 -h /usr/share/nginx/html -s /sbin/nologin -G appuser -g appuser appuser && \
  chown -R appuser:appuser /usr/share/nginx/html

USER appuser

# Copy the Nginx configuration file
COPY nginx.default.conf /etc/nginx/nginx.conf

# Copy the built application from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
