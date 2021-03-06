'use strict';

var app = angular.module('authentication', []);

app.component('authentication', {
        templateUrl: '/ang/templates/authentication.html'
    });

app.service('authenticationService', function($location, $window, $timeout, checkAuthenticationService, addUserService, loginService, logoutService) {
    return {
        check_authentication: function(){
            var authentication_data = checkAuthenticationService.get(function(data) {
                if(data.SuperUser){
                    $window.location.href='/admin/';
                }
                else{
                    if(data.UserAuthenticated){

                    }
                    else{
                        $location.path('/');
                    }
                }
                return data;
            });
            console.log(authentication_data)
            return authentication_data;
        },
        authentication_status: function(){
            var authentication_data = checkAuthenticationService.get(function(data){
                if(data.user_authenticated){
                    return { user_authenticated: true };
                }
                else{
                    return { user_authenticated: false };
                }
            });
        },
        add_user: function(data){
            console.log(data);
            var add_user_data = addUserService.post(data, function(data){
                return data;
            });
            console.log(add_user_data)
            return add_user_data;
        },
        login: function(data){
            console.log(data);
            var login_data = loginService.post(data, function(login_status){
                console.log(login_status);
                return login_status;
            });
            console.log(login_data)
            return login_data;
        },
        logout: function(data){
            var logout_data = logoutService.post(data, function(data){
                return data;
            });
            return logout_data;
        }
    }
});