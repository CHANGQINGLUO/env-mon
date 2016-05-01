  'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ChangePwdCtrl', function ($scope,$rootScope,$location,$http) {

  	$scope.invalidUserPassword = false;

  	$scope.model={
        "id": $rootScope.userProfile.id,
        "oldPassword":"",
        "newPassword":"",
        "newPasswordConfirm":""
    };
    $scope.changePassword = function(){

    
    	$rootScope.touchStart('changePasswordButton');
        if($rootScope.mockMode){
        	$location.path('/my-info');
        }else{
            /** Validation*/
            if(!ValidationService.validatePassword($rootScope,$scope.model.oldPassword)||
                !ValidationService.validatePassword($rootScope,$scope.model.newPassword)||!ValidationService.validateSamePassword($rootScope,$scope.model.newPassword,$scope.model.newPasswordConfirm)) {
                $scope.invalidUserPassword = true;
                $rootScope.touchEnd('changePasswordButton');
            }else{

                $http({
                    url:$rootScope.hostUrl+'changePassword',
                    method:'POST',
                    data:{
                        'loginId':$scope.model.id,
                        'password':$scope.model.oldPassword,
                        'newPassword':$scope.model.newPassword
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        if(data.code=='0'){
                            console.log('change password success');
                            $scope.invalidUserPassword = false;
                            $rootScope.popup('修改密码成功');
                            $location.path('/my-info');
                        }else{
                            console.log('change fail: '+data.message);
                            $rootScope.popup('修改密码失败, 请稍后重试');
                            $scope.invalidUserPassword = true;
                        }
                        $rootScope.touchEnd('changePasswordButton');
                        
                    }).error(function(data,header,config,status){
                        console.log('change password fail');
                        $rootScope.touchEnd('changePasswordButton');
                });
            }
        }
    };
  });

