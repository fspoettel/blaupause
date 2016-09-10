#!/usr/bin/env bash

set -o errexit -o nounset

# Do nothing if the commit was not pushed to master
if [ "$TRAVIS_PULL_REQUEST" != "false" ] || [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made inside a pull request or against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

#  Set Travis as commiter git user
git config --global user.email "travis-ci@localhost"
git config --global user.name "Travis CI"

# Rebuild docs with webpack
gulp build -p

# Initialize an empty repository, fetch upstream and reset it
rev=$(git rev-parse --short HEAD)
cd ./public
git init

# Add all changes in push them to gh-pages
touch .
git add -A .
git commit -m "rebuild pages at ${rev}"
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1
