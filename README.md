# Objective

This project was created to better understand how `npx create-react-app` works under the hood when talking about tooling w/ `babel` and `webpack`.

It was created following [this](https://www.youtube.com/watch?v=LMCtGvLJT6c&ab_channel=C%C3%B3digoFonteTV) tutorial.

# Idea

The idea is to see the casting of ES6 to ES5 done automatically by the `webpack` w/ `babel` in the `index.js` file.

It should cast what we have wrote on it (a `const`), casting to the older versions so the olders browser can support it (`var`).

Also, it should automatically import and instantiate the files once the app is running w/a the need of manually importing it.

# Webpack Notes

Webpack never knows what it should do with the file you want to refer.

So, you should explicitely say to it, what should I do with which file.

# Flow

When `webpack` is running the `babel`, the `babel-loader` will look for `.babelrc` configs settings.

The `.babelrc` is specifing the we are working w/ the latest js specifics, and also working w/ react.

# Usage

- `npm run start`: To check the project running during dev mode w/ hot-reload.

- `npm run build`: To check the project being bundled during prod mode.

# Dependencies

- `webpack`: the `webpack` itself.
- `webpack-cli`: the cli for `webpack`.
- `webpack-dev-server`: `webpack` dev bundle to quickly dev an app.
- `html-webpack-plugin`: simplifies creation of HTML files to serve your `webpack` bundles.
- `babel-loader`: the glue so `webpack` can work w/ `babel`.
- `@babel/core`: the `babel` itself.
- `@babel/preset-env`: smart `babel` preset that allows you to use the latest JavaScript.
- `@babel/preset-react`: smart `babel` preset that allows you to use the latest React specifics.
