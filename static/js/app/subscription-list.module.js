'use strict';

var app = angular.module('subscriptionList', []);

app.component('subscriptionList', {
        templateUrl: '/ang/templates/subscription-list.html'
    });

app.controller('subscriptionListController', function($rootScope, $scope, getSubscriptionListService){
    $scope.subscription_list = []

    get_subscription_list();

    $scope.$on('SubscriptionsUpdated', function(){
        get_subscription_list();
    })

    function get_subscription_list(){
        getSubscriptionListService.get(function(data){
            console.log(data);
            $scope.subscription_list = data.SubscriptionList;
        })
    }
});