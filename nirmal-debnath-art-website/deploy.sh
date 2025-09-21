#!/usr/bin/env sh
set -e

# Build
npm ci || npm install
npx vite build

# Enter dist and ensure a clean git repo
cd dist
# Remove old git metadata if it exists
[ -d .git ] && rm -rf .git

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# Use your repo URL (HTTPS or SSH)
# HTTPS:
git push -f https://github.com/Nirmal-Debnath/Nirmal-Debnath.github.io.git main:gh-pages
# SSH (uncomment if using SSH and comment HTTPS):
# git push -f git@github.com:USERNAME/REPO.git main:gh-pages

cd -
