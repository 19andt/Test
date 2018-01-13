'use strict';

var app = angular.module('addReview', []);

app.service('addReviewService', function($resource){
    var url = '/review/add_review'
    return $resource(url, {}, {
        post: {
            method: 'post',
            params: {},
            isArray: false,
            cache: false,
        }
    });
});