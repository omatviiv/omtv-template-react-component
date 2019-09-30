Component description

# Install
```
npm i your-component-name
```

# Use
Show how to use your component
```
<MyComponent data={[...]}>Children</MyComponent>
```

Component created with this template will not be bundled or compiled.
It provides component in raw form as is in `component/` folder.
The project that is going to use component created with this template should
bundle and complie the component itself, here are the instructions for 
webpack and babel:
```webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/my-component'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            ...
          },
        },
      },
    ],
  },
  ...
};
```

You can also use [omtv-template-react](https://github.com/omatviiv/omtv-template-react)
for your project, its webpack/babel config is compatible with this approach

# Improve
1. Install dependencies `npm i`.
2. Start webpack dev server for demo project `npm run demo`.
3. Improve component.
