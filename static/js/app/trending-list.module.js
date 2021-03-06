'use strict';

var app = angular.module('trendingList', []);

app.component('trendingList', {
        templateUrl: '/ang/templates/trending-list.html'
    });

app.controller('trendingListController', function($scope, trendingService){
    get_trending_topics();


    function get_trending_topics(){
        trendingService.get(function(data){
            $scope.trending_topics = data.TrendingTopics;
        })
    }
});