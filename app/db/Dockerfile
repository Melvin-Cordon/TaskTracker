# Use the official PostgreSQL image as the base
FROM postgres:latest

# Set the password for the default "postgres" user
ENV POSTGRES_PASSWORD postgres

# Copy the initialization script into the container
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port (5432)
EXPOSE 5432
