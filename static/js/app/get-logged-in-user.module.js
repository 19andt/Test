'use strict';

var app = angular.module('getLoggedInUser', []);

app.service('getLoggedInUserService', function($http, $resource){
    var url = '/user/get_logged_in_user'
    return $resource(url, {}, {
        get: {
            method: 'GET',
            params: {},
            isArray: false,
            cache: false,
        }
    });
});