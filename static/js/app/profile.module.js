'use strict';

var app = angular.module('profile', []);

app.component('profile', {
        templateUrl: '/ang/templates/profile.html'
    });

app.controller('profileController', function($rootScope, $scope, $location, $routeParams, $route, $timeout, $window, userProfileService, getReviewsByUserService, Upload, subscriptionStatusService, updateControllerService, getObserverCountService){
    $scope.username = $routeParams.username;
    $scope.bio_editing = false;
    $scope.mouse_over = false;
    $scope.pic_editing = false;

    console.log($routeParams)

    get_user_profile();
    get_user_reviews();
    get_subscription_status();
    get_observer_count();

    $scope.subscription_status_changed = function(){
        var url_params = {
            username: $scope.username
        }

        var data = angular.toJson({
            update_subscription_status: !$scope.subscription_status
        })

        console.log(url_params)

        subscriptionStatusService.post(url_params, data, function(data){
            if(data.UpdateSubscriptionStatus){
                $scope.subscription_status = data.SubscriptionStatus;
                updateControllerService.interests_updated();
            }
        })
    }

    $scope.edit_bio = function(){
        $scope.bio_editing = true;
    }

    $scope.finish_edit_bio = function(){
        console.log('Finished editing bio');

        var url_params = {
            username: $scope.username
        }

        var data = angular.toJson({
            bio: $scope.person_data.bio
        });

        userProfileService.post(url_params, data, function(data){
            console.log(data)
            $scope.bio_editing = false
        })
    }

    $scope.change_credentials_click = function(){
        $location.path('/credentials');
    }

    $scope.editing_pic = function(){
        $scope.pic_editing = true;
    }

    $scope.upload_pic = function (dataUrl, name) {
        Upload.upload({
            url: 'http://test-rb.herokuapp.com/person/profile/' + $scope.username,
            data: {
                pic: Upload.dataUrltoBlob(dataUrl, name)
            },
        }).then(function (response) {
            $timeout(function () {
                $scope.result = response.data;
                console.log($scope.result)
                $scope.mouse_over = false;
                $scope.pic_editing = false;
                $route.reload();
            });
        }, function (response) {
            if (response.status > 0) $scope.errorMsg = response.status
                + ': ' + response.data;
        }, function (evt) {
            $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
            console.log($scope.progress)
        });
    }

    function get_initials(){
        var str = ''
        var qs = $scope.person_data.user.first_name.split(' ');

        console.log(qs)

        for(var key in qs){
            str += qs[key][0]
        }
        return str
    }

    function get_user_profile(){

        var url_params = {
            username: $scope.username
        }

        userProfileService.get(url_params, function(data){
            console.log(data)
            if(data.PersonStatus){
                $scope.person_data = data.Person;
                $scope.primary_user = data.PrimaryUser;
                $scope.initials = get_initials();
            }else{
                $window.location.href = '/';
            }
        })
    }

    function get_user_reviews(){

        var url_params = {
            username: $scope.username
        }

        getReviewsByUserService.get(url_params, function(data){
            $scope.review_list = data.ReviewsList;
            $scope.max_rating = data.MaxRating;
            $scope.user = data.User;
            console.log($scope.review_list);
        })
    }

    function get_subscription_status(){
        var url_params = {
            username: $scope.username
        }
        subscriptionStatusService.get(url_params, function(data){
            console.log(data);
            $scope.subscription_status = data.SubscriptionStatus;
        })
    }

    function get_observer_count(){
        getObserverCountService.get(function(data){
            console.log(data)
            $scope.observer_count = data.ObserverCount
        })
    }
});