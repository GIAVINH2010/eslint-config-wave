#! /bin/sh

if [ ! -e ../../../.husky/pre-commit ] ; then
    cd ../../.. && npx husky install && npx husky add .husky/pre-commit 'npm run lint:staged'
fi

