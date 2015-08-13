'use strict';

module.exports = function (server, plugin) {

    server.route({
        method: 'GET',
        path: '/task/showText',
        config : {
            handler : plugin.showText
        }
    });

    server.route({
        method: ['POST', 'PUT'],
        path: '/task/create',
        config : {
            handler : function(request, reply) {

                setTimeout(function(review) {

                    reply('this is the user');

                    sendMessage('inform-indexer-about-review', {'review':review});
                    sendMessage('inform-elastic-search', {});
                    sendMessage('created-review', {});


                }, 3000);


            }
        }
    });

    //rabbit.on('pam pam', function (params) {
    //    plugin.doSomething(params);
    //});


};
