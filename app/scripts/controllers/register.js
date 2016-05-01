  'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('RegisterCtrl', function ($scope,$rootScope,$location,$http) {

  	$scope.model={
        "id": "",
        "password": "",
        "name":"",
        "email":"",
        "phone":"",
        "address":"",
        "company":"",
        "clientCode":"",
        "role":""
    };
    $scope.invalidInput = false;

    $scope.enableInput = function(){
    	$scope.invalidInput = false;
    }
    $scope.back = function(){
    	$location.path('/login');
    }
    $scope.registerUser = function(){
        $rootScope.touchStart('registerButton');


    	/** Mock Mode */
        if($rootScope.mockMode){
        	$location.path('/login');
        }else{
            if($rootScope.isUserLogin){
                //case 1: company user login and register for proxy
                $scope.model.role='advisor';
            }else{
                //self registration 
                $scope.model.role='customer';
            }

	        /** Validation*/
	    	if(($scope.model.role=='customer'&&!ValidationService.validatePassword($rootScope,$scope.model.password))||
                //($scope.model.role=='customer'&&!ValidationService.validateEmail($rootScope,$scope.model.email))||
                !ValidationService.validatePhone($rootScope,$scope.model.phone)||
                !ValidationService.validateName($rootScope,$scope.model.name)||
                ($scope.model.role=='advisor'&&!ValidationService.validateCompany($rootScope,$scope.model.company))) {
	    		$scope.invalidInput = true;
	    		$rootScope.touchEnd('registerButton');
                return;
	    	}
	    	/** Validation done, call host */
            
            if ($scope.model.role=='customer')
                $http({
                    url:$rootScope.hostUrl+'registerUser',
                    method:'POST',
                    data:{
                        'loginId':$scope.model.phone,
                        'password': $scope.model.password,
                        'email':$scope.model.email,
                        "name":$scope.model.name,
                        'hp':$scope.model.phone,
                        'address':$scope.model.address,
                        'company':$scope.model.company,
                        'clientCode':$scope.model.clientCode,
                        'role':$scope.model.role
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        if(data.code=='0'){
                            console.log('login success');
                            $scope.invalidInput = false;
                            $rootScope.popup('注册用户成功');
                            $location.path('/login');
                        }else{
                            console.log('login fail: '+data.message);
                            $rootScope.popup('注册用户失败, 请稍候重试');
                            $scope.invalidInput = true;
                        }
                        $rootScope.touchEnd('registerButton');

                    }).error(function(data,header,config,status){
                        console.log('register fail');
                        $scope.invalidInput = true;
                        $rootScope.touchEnd('registerButton');
                });

            else if ($scope.model.role=='advisor')   
                $http({
                    url:$rootScope.hostUrl+'registerAdvisor',
                    method:'POST',
                    data:{
                        'internalUserId':$rootScope.userProfile.id,
                        'loginId':$scope.model.phone,
                        'password': $scope.model.phone,
                        'email':'',
                        "name":$scope.model.name,
                        'hp':$scope.model.phone,
                        'address':'',
                        'company':$scope.model.company,
                        'role':$scope.model.role
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        if(data.code=='0'){
                            console.log('login success');
                            $scope.invalidInput = false;
                            $rootScope.popup('注册用户成功');
                            $location.path('/login');
                        }else{
                            console.log('login fail: '+data.message);
                            $rootScope.popup('注册用户失败, 请稍候重试');
                            $scope.invalidInput = true;
                        }
                        $rootScope.touchEnd('registerButton');

                    }).error(function(data,header,config,status){
                        console.log('register fail');
                        $scope.invalidInput = true;
                        $rootScope.touchEnd('registerButton');
                });
        }
    };

  });

