require('babel-register')({
    presets:["env","react"]
});
// require('css-modules-require-hook')({
//     extensions:['.scss'],

// })
require('babel-polyfill');
module.exports = require('./index');