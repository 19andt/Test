'use strict';

var app = angular.module('topicReviewList', []);

app.component('topicReviewList', {
        templateUrl: '/ang/templates/topic-review-list.html'
    });

app.controller('topicReviewListController', function($rootScope, $scope, $controller, $http, getTopicService, getReviewsTopicService, updateTopicService){
    $controller('topicController', { $scope: $scope });
    $scope.topic_selected = $scope.topic_name
    $scope.description_editing = false

    console.log($scope.topic_selected)

    get_topic();
    get_reviews();

    $scope.start_editing = function(){
        $scope.description_editing = true;
    }

    $scope.topic_save = function(){
        var data = angular.toJson({
            topic_name: $scope.topic_data.name,
            description: $scope.topic_data.description,
        })

        console.log(data)

        updateTopicService.post(data, function(data){
            get_topic();
        })
        console.log('Topic saved.')
    }

    function get_topic(){
        var url_params = {
            topic_name: $scope.topic_selected
        }

        getTopicService.get(url_params, function(data){
            $scope.topic_data = data.Topic;
            $scope.description = $scope.topic_data.description;
            console.log($scope.topic_data);
        })
    }

    function get_reviews(){
        var url_params = {
            topic_name: $scope.topic_selected
        }

//        $http.get('/review/get_reviews_topic/:topic_name', {params: {url_params}}).then(function(data){
//            $scope.review_list = data.ReviewsList;
//            $scope.max_rating = data.MaxRating;
//            console.log($scope.review_list);
//        })

        getReviewsTopicService.get(url_params, function(data){
            $scope.review_list = data.ReviewsList;
            $scope.max_rating = data.MaxRating;
            console.log($scope.review_list);
        });
    }
});