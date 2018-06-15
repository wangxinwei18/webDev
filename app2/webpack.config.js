const path = require('path');

module.exports = {
  mode: 'development',
  entry: './runoob1.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
 
};