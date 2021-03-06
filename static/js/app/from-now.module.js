'use strict';

var app = angular.module('fromNow', []);

app.filter('fromNowFilter', function(moment) {
    return function(dateString) {
        return moment(dateString).fromNow()
    };
});