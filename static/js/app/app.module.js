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
    'textAngular',

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
    'topicDetail',
    'searchText',
    'searchResults',
    'addTopic',
    'editInterest',
    'updateController',
    'profile',
    'userProfile',
    'getReviewsByUser',
    'credentials',
    'getSubscriptionList',
    'subscriptionList',
    'subscriptionStatus',
    'notification',
    'trendingList',
    'trending',
    'reviewDetail',
    'getReview',
    'getComments',
    'addComment',
    'getObserverCount',
    'getLoggedInUser',
    'oauth',
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
                when('/credentials', {
                    template: '<credentials></credentials>'
                }).
                when('/trending', {
                    template: '<trending-list></trending-list>'
                }).
                when('/review/:id', {
                    template: '<review-detail></review-detail>'
                }).
                when('/oauth/:provider', {
                    template: '<oauth></oauth>'
                }).
                otherwise({
                    template: 'Not Found'
                })
        }
    );