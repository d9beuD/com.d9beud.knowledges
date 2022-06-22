#!/usr/bin/env sh

# abort on errors
set -e

git config --global user.email "vincent.bathelier@protonmail.com"
git config --global user.name "Vincent Bathelier"

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:d9beuD/com.d9beud.knowledges.git main:gh-pages

cd -