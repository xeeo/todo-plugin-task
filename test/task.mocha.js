'use strict';

var chai   = require('chai');
var should = chai.should();
var Hapi   = require('hapi');
var domain = require('domain').createDomain();
var q      = require('q');
var server = new Hapi.Server();

function inject(options) {
    var defer = q.defer();

    domain.run(function () {
        server.inject(options, function (response) {
            defer.resolve(response);
        });

    });
    domain.on('error', function (err) {
        defer.reject(err);
        console.log(err.stack);
    });

    return defer.promise;
};

describe('task-plugin -', function () {

    before(function (done) {
        server.connection({
            port: 5000
        });

        server.register([
            {
                register: require('../'),
                options : {}
            }
        ], function (error) {
            if (error) {
                console.error(error);
                return;
            }
            server.start(done);
        });
    });

    after(function (done) {
        server.stop();
        done();
    });

    describe('on route /task/showText -', function () {

        it('GET should respond with a text "hey"', function () {
            return inject({
                method: "GET",
                url   : "/task/showText"
            }).then(function (response) {
                (response.statusCode).should.equal(200);
                (response.result).should.eql({text: 'hey'});
            });
        });

    });

    describe('create task -', function () {

        it('should have a POST and PUT route to /task/create', function () {
            return q.all([
                inject({
                    method: "POST",
                    url   : "/task/create"
                }),
                inject({
                    method: "PUT",
                    url   : "/task/create"
                })
            ]).then(function(responses) {
                responses.forEach(function(response) {
                    (response.statusCode).should.equal(200);
                });
            });
        });

        it('GET should respond with a text "hey"', function () {
            return inject({
                method: "GET",
                url   : "/task/showText"
            }).then(function (response) {
                (response.statusCode).should.equal(200);
                (response.result).should.eql({text: 'hey'});
            });
        });

    });

});