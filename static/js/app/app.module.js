'use strict';

angular.module('ReviewBag', [
    // External
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ngMaterial',
    'ngMessages',
    'angularMoment',
    'ngSanitize',
    'ui.bootstrap',
    'ngFileUpload',
    'ngImgCrop',

    // Internal
    'home',
    'navBar',
    'checkAuthentication',
    'login',
    'logout',
    'addUser',
    'authentication',
    'userAuthentication',
    'getInterests',
    'interest',
    'searchTopic',
    'updateInterests',
    'interestList',
    'addReview',
    'newReview',
    'getReviewsForUser',
    'homeReviewList',
    'rbControllers',
    'updateRating',
    'fromNow',
    'topic',
    'topicReviewList',
    'getReviewsTopic',
    'test',
    'topicDetail',
    'searchText',
    'searchResults',
    'addTopic',
    'editInterest',
    'updateController',
    'profile',
    'userProfile',
    'getReviewsByUser',
]);

angular.module('ReviewBag').
    config(
        function($locationProvider, $routeProvider, $httpProvider){
            $locationProvider.html5Mode({
                enabled:true
            })

            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

            $routeProvider.
                when('/', {
                    template: '<home></home>'
                }).
                when('/user-authentication', {
                    template: '<user-authentication></user-authentication>'
                }).
                when('/interest', {
                    template: '<interest></interest>'
                }).
                when('/new-review', {
                    template: '<new-review></new-review>'
                }).
                when('/new-review/:topic_name', {
                    template: '<new-review></new-review>'
                }).
                when('/topic/:topic_name', {
                    template: '<topic></topic>'
                }).
                when('/search-results/:search_text', {
                    template: '<search-results></search-results>'
                }).
                when('/profile/:username', {
                    template: '<profile></profile>'
                }).
                when('/test', {
                    template: '<test></test>'
                })
        }
    );