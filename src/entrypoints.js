'use strict';

module.exports = function (server, plugin) {

    server.route({
        method: 'GET',
        path: '/task/showText',
        handler : plugin.showText,
        config : {}
    });

    server.route({
        method: ['POST', 'PUT'],
        path: '/task/create',
        handler : plugin.create,
        config : {}
    });

    //rabbit.on('pam pam', function (params) {
    //    plugin.doSomething(params);
    //});

};
