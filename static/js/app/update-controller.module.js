'use strict';

var app = angular.module('updateController', []);

app.service('updateControllerService', function($rootScope){
    var status = {}

    status.interests_updated = function(){
        $rootScope.$broadcast('InterestsUpdated');
    }

    status.user_logged_in = function(){
        $rootScope.$broadcast('UserLoggedIn');
    }

    status.user_logged_out = function(){
        $rootScope.$broadcast('UserLoggedOut');
    }

    status.new_user_registered = function(){
        $rootScope.$broadcast('NewUserRegistered');
    }

    status.subscriptions_updated = function(){
        $rootScope.$broadcast('SubscriptionsUpdated');
    }

    return status
});