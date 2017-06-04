> A boilerplate to start writing your NPM modules in ES6 using Babel.

## Install

```
$ npm install module-template-ES6 --save
```


## GULP or NPM commands?

Currently you can build this project either by running a gulp command or npm build command.

### NPM commands

If you want to build a basic JS module and do not require to run any extra advanced tasks during build you can use [npm-commands](https://github.com/anvk/babel-npm-module-example/tree/npm-commands) branch. Or you can remove `gulpfile.babel.js` file and remove the following npm modules from the project:

 - babel-core
 - gulp
 - gulp-babel
 - gulp-eslint
 - gulp-mocha
 - gulp-rimraf
 - run-sequence

#### Using NPM commands

```
$ npm run build
```

```
$ npm test
```

## Linting?

I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) for this project with my few custom modifications. You can read more on the [Airbnb JavaScript Style Guide here](https://github.com/airbnb/javascript)

## License

MIT license; see [LICENSE](./LICENSE).

Original package was published by:
"name": "Alexey Novak"  
"email": "alexey.novak.mail@gmail.com"  
"git": https://github.com/anvk/babel-npm-module-example.git  
MANY THANKS!