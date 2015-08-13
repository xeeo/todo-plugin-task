'use strict';

exports.register = function(server, options, next) {
    var plugin = require('./src/implementation')(options);
    require('./src/entrypoints')(server, plugin);
    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};