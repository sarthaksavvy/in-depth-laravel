#!/bin/sh
set -e

echo "Deploying application ..."
    # Update codebase
    git pull
    # Install dependencies based on lock file
    npm install
    # Migrate database
    npm run build
    # Clear cache
    pm2 restart indepth
echo "Application deployed!"