'use strict';

module.exports = function (server, plugin) {

    server.route({
        method: 'GET',
        path: '/task/say-hey',
        handler : plugin.showText,
        config : {}
    });

    server.route({
        method: ['POST', 'PUT'],
        path: '/task/create',
        handler : plugin.showText,
        config : {}
    });
    //
    //rabbit.on('pam pam', function (params) {
    //    plugin.doSomething(params);
    //});

};
