'use strict';

var app = angular.module('home', []);

app.component('home', {
        templateUrl: '/ang/templates/home.html'
    });

app.controller('homeController', function($rootScope, $scope, authenticationService){
    $scope.authentication_data = authenticationService.check_authentication();
    console.log($scope.authentication_data)
});