'use strict';

var app = angular.module('getReview', []);

app.service('getReviewService', function($http, $resource){
    var url = '/review/get_review/:id'
    return $resource(url, {}, {
        get: {
            method: 'GET',
            params: {},
            isArray: false,
            cache: false,
        }
    });
});