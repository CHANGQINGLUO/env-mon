'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('LoginCtrl', function ($scope,$rootScope,$location,$http) {


    $scope.invalidUserPassword = false;

    $scope.model={
        "id": "",
        "password": ""
    };

    $scope.enableUserPassword = function(){
        $scope.invalidUserPassword = false;
    };

    $scope.submit = function(){
        $rootScope.touchStart('loginButton');
        if($rootScope.mockMode){
        	$location.path('/main');
        	$rootScope.isUserLogin = true;
        	$rootScope.currentTab = 'main';
            $rootScope.userProfile={"name":"装修工程师","phone":"18000000001","email":"zhuangxiushi@qq.com","creationDate":"2016-02-23","address":"龙发装饰","role":"customer"};
        }else{
            /** Validation*/
            if(!ValidationService.validateUserId($rootScope,$scope.model.id)||!ValidationService.validatePassword($rootScope,$scope.model.password)) {
                $scope.invalidUserPassword = true;
                $rootScope.touchEnd('loginButton');
            }else{

                $http({
                    url:$rootScope.hostUrl+'login',
                    method:'POST',
                    data:{
                        'loginId':$scope.model.id,
                        'password': $scope.model.password
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        if(data.code=='0'){
                            console.log('login success');
                            $rootScope.userProfile={'id':data.body.loginId,'name':data.body.name,'email':data.body.email,'phone':data.body.hp,'role':data.body.role,'address':data.body.address,'company':data.body.company,'clientCode':data.body.clientCode};
                            $scope.invalidUserPassword = true;
                            $rootScope.directInside('my-service-nav');
                            $rootScope.isUserLogin = true;

                            //store userid and password locally
                            localStorage.setItem("id",$scope.model.id);
                            localStorage.setItem("password",$scope.model.password);
                        }else{
                            console.log('login fail: '+data.message);
                            $rootScope.popup('登录失败, 请稍后重试');
                            $scope.invalidUserPassword = true;
                        }
                        $rootScope.touchEnd('loginButton');
                        
                    }).error(function(data,header,config,status){
                        console.log('login fail');
                        $rootScope.touchEnd('loginButton');
                });
            }
        }
    };
    $scope.goRegister = function(){
    	$location.path('/register');
    };
    $scope.goReset = function(){
    	$location.path('/reset');
    };
    $scope.goChangePassword = function(){
        $location.path('/changePassword');
    };
  });
