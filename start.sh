#!/usr/bin/env bash
set -e  # exit on error

# build frontend
echo "Building frontend..."
cd frontend
npm run build
cd ..

# copy the frontend build to backend to be served by express
rm -rf backend/public
cp -r frontend/dist backend/public

# build backend (TypeScript compile)
echo "Building backend..."
cd backend
npm run build   # assumes you have "build": "tsc" in backend/package.json
cd ..

# start backend
echo "Starting backend..."
node backend/dist/index.js
