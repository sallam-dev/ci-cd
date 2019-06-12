# clear build directory:
   rm -rf ./dist

# lint code
    ./node_modules/.bin/eslint --ext .js,.vue --ignore-path .gitignore ./

# lint style
    ./node_modules/.bin/stylelint '**/*.{css,vue}' --ignore-path .gitignore

# duplicates
    ./node_modules/.bin/jsinspect --threshold 30 --minimum-instances 2 src

# test unit
    ./node_modules/.bin/mocha --require @babel/register ./test/unit/**/*.unit.js

# test e2e
    node ./scripts/cypress.js --headless --no-video

# code coverage
    NODE_ENV=test ./node_modules/.bin/nyc ./node_modules/.bin/mocha --require @babel/register ./test/unit/**/*.unit.js

#test e2e with ui
   node ./scripts/cypress.js
