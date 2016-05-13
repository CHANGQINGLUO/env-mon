  'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ResetCtrl', function ($scope,$rootScope,$location,$http) {

  	$scope.invalidUserPassword = false;

  	$scope.model={
        "id": ""
    };
    $scope.back = function(){
    	$location.path('/login');
    }
    $scope.resetUser = function(){

    
    	$rootScope.touchStart('resetButton');
        if($rootScope.mockMode){
        	$location.path('/login');
        }else{
            /** Validation*/
            if(!ValidationService.validateUserId($rootScope,$scope.model.id)) {
                $scope.invalidUserPassword = true;
                $rootScope.touchEnd('resetButton');
            }else{

                $http({
                    url:$rootScope.hostUrl+'resetPassword',
                    method:'POST',
                    data:{
                        'loginId':$scope.model.id,
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        if(data.code=='0'){
                            console.log('reset password success');
                            $rootScope.userProfile={'id':$scope.model.id};
                            $scope.invalidUserPassword = true;
                            $rootScope.popup('重置密码成功');
                            $location.path('/login');
                        }else{
                            console.log('login fail: '+data.message);
                            $rootScope.popup('重置密码失败, 请稍后重试');
                            $scope.invalidUserPassword = true;
                        }
                        $rootScope.touchEnd('resetButton');
                        
                    }).error(function(data,header,config,status){
                        console.log('login fail');
                        $rootScope.touchEnd('resetButton');
                });
            }
        }
    };
  });

