'use strict';

var plugin = {};

var constructor = function (options) {
    plugin.options = options || {};
    return plugin;
};

plugin.showText = function (request, reply) {
    console.log();
    reply({text: 'hey'});
};

plugin.create = function (request, reply) {
    console.log();
    reply({text: 'hey'});
};

module.exports = constructor;