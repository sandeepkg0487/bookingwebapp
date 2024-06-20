const path = require('path');

module.exports = {
  entry: './index.js', // Adjust the entry point if necessary
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  target: 'node', // Specify that the target environment is Node.js
  node: {
    __dirname: false,
    __filename: false
  },
  externals: {
    // Specify 'fs' and other Node.js built-ins to not be bundled
    fs: 'commonjs fs',
    path: 'commonjs path',
    os: 'commonjs os',
    util: 'commonjs util',
    net: 'commonjs net',
    child_process: 'commonjs child_process',
    tar: 'commonjs tar'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              // Add any specific options here if needed
            }
          }
        ]
      }
    ]
  }
};
