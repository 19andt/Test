'use strict';

var app = angular.module('getReviewsForUser', []);

app.service('getReviewsForUserService', function($http, $resource){
    var url = '/review/get_reviews_for_user'
    return $resource(url, {}, {
        get: {
            method: 'GET',
            params: {},
            isArray: false,
            cache: false,
        }
    });
});