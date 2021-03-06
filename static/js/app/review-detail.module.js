'use strict';

var app = angular.module('reviewDetail', []);

app.component('reviewDetail', {
        templateUrl: '/ang/templates/review-detail.html'
    });

app.controller('reviewDetailController', function($rootScope, $scope, $location, $routeParams, $window, getReviewService, getCommentsService, addCommentService, getLoggedInUserService){
    $scope.id = $routeParams.id;
    $scope.new_comment = {
        caption: '',
        description: ''
    }

    get_review_detail();
    get_comments();
    get_logged_in_user();

    $scope.add_comment = function(){
        if($scope.new_comment.description != ''){

            var data = angular.toJson({
                review_id: $scope.id,
                caption: $scope.new_comment.caption,
                description: $scope.new_comment.description
            })

            addCommentService.post(data, function(data){
                if(data.AddCommentStatus){
                    $scope.new_comment.caption = ''
                    $scope.new_comment.description = ''
                    get_comments();
                }
            })
        }
    }

    function get_review_detail(){
        if($scope.id != null){
            console.log('Entered.')
            var url_params = {
                id: $scope.id
            }

            getReviewService.get(url_params, function(data){
                if(data.Review != null){
                    $scope.review_data = data.Review
                    $scope.rating_data = data.Rating
                    $scope.topic_list = data.TopicList
                    $scope.max_rating = data.MaxRating
                }else{
                    $window.location.href = '/';
                }
            })
        }
    }

    function get_comments(){
        if($scope.id != null){
            console.log('Entered.')
            var url_params = {
                id: $scope.id
            }

            getCommentsService.get(url_params, function(data){
                $scope.comment_list = data.CommentList
            })
        }
    }

    function get_logged_in_user(){
        getLoggedInUserService.get(function(data){
            console.log(data)
            if(data.UserAuthenticated){
               $scope.current_user_username = data.User.username
            }else{
                $window.location.href = '/';
            }
        })
    }
});