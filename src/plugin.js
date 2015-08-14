'use strict';

exports.register = function(server, options, next) {
    var plugin = require('./implementation')(options);
    require('./entrypoints')(server, plugin);
    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};