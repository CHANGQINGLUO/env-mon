  'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MyServiceCtrl
 * @description
 * # MyServiceCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyServiceCtrl', function ($scope,$rootScope,$location,$http) {

    $scope.applyUserType = function(){
        if($rootScope.userProfile.role=='customer'){
            $scope.isIndividual = true;
            $scope.isInternal = false;
            $scope.isProxy = false;
            $scope.isAdmin = false;
        }else if($rootScope.userProfile.role=='advisor'){
            $scope.isIndividual = false;
            $scope.isProxy = true;
            $scope.isInternal = false;
            $scope.isAdmin = false;
        }else if($rootScope.userProfile.role=='internal'){
            $scope.isIndividual = false;
            $scope.isInternal = true;
            $scope.isProxy = false;
            $scope.isAdmin = false;
        }else if($rootScope.userProfile.role=='admin'){
            $scope.isIndividual = false;
            $scope.isInternal = false;
            $scope.isProxy = false;
            $scope.isAdmin = true;
        }
    }

    if(!$rootScope.isUserLogin){
        $rootScope.directInside("login");
        return;  
    }
    $scope.applyUserType();
    
    $scope.model={
        "id": '',
        "email":'',
        "phone":'',
        "name":'',
        "address":'',
        "company":''
    };
    $scope.reset = function(){
        $scope.model.id = $rootScope.userProfile.id;
        $scope.model.email = $rootScope.userProfile.email;
        $scope.model.phone = $rootScope.userProfile.phone;
        $scope.model.name = $rootScope.userProfile.name;
        $scope.model.address = $rootScope.userProfile.address;
        $scope.model.company = $rootScope.userProfile.company;
    }
    $scope.updateGlobalUserProfile = function(){
        $rootScope.userProfile.id = $scope.model.id ;
        $rootScope.userProfile.email = $scope.model.email ;
        $rootScope.userProfile.phone = $scope.model.phone ;
        $rootScope.userProfile.name = $scope.model.name ;
        $rootScope.userProfile.address = $scope.model.address ;
        $rootScope.userProfile.company = $scope.model.company ;
    }

    $scope.showSummaryScreen = function(){
        $scope.isShowSummary=true;
        $scope.isShowName=false;
        $scope.isShowEmail=false;
        $scope.isShowPhone=false;
        $scope.isShowAddress=false;
        $scope.isShowCompany=false;
    }
    $scope.hideSummaryScreen = function(){
        $scope.isShowSummary=false;
        $scope.isShowName=false;
        $scope.isShowEmail=false;
        $scope.isShowPhone=false;
        $scope.isShowAddress=false;
        $scope.isShowCompany=false;
    }
    $scope.changeName = function(){
        $scope.hideSummaryScreen();
        $scope.isShowName=true;
    }
    $scope.changeEmail = function(){
        $scope.isShowSummary=false;
        $scope.isShowEmail=true;
    }
    $scope.changePhone = function(){
        $scope.hideSummaryScreen();
        $scope.isShowPhone=true;
    }
    $scope.changeAddress = function(){
        $scope.hideSummaryScreen();
        $scope.isShowAddress=true;
    }
    $scope.changeCompany = function(){
        $scope.hideSummaryScreen();
        $scope.isShowCompany=true;
    }
    $scope.back = function(){

        $scope.showSummaryScreen();
        $scope.reset();
    }
    
    $scope.logout = function(){
        $rootScope.touchStart('logoutButton');
        if($rootScope.mockMode){
        	$location.path('/login');
        	$rootScope.isUserLogin = false;
        	$rootScope.currentTab = 'main';
        }else
            $http({
                url:$rootScope.hostUrl+'logout',
                method:'POST',
                data:{
                    'loginId':$rootScope.userProfile.id
                },
                headers:{
                    'Content-Type': 'application/json'
                }
                }).success(function(data,header,config,status){
                    if(data.code=='0'){
                        console.log('logout success');
                        $location.path('/login');
                        $rootScope.isUserLogin = false;
                        //clean local stroage id and password
                        localStorage.removeItem('id');
                        localStorage.removeItem('password');
                    }else{
                        console.log('logout fail: '+data.message);
                    }
                    $rootScope.touchEnd('logoutButton');

                }).error(function(data,header,config,status){
                    console.log('login fail');
                    $rootScope.touchEnd('logoutButton');
                    
            });
    };

    $scope.save = function(){
        $rootScope.touchStart('saveButton');
        if($rootScope.mockMode){
            $scope.back();
        }else
            $http({
                url:$rootScope.hostUrl+'updateUserDetail',
                method:'POST',
                data:{
                    'loginId':$scope.model.id,
                    'name':$scope.model.name,
                    'hp': $scope.model.phone,
                    'email': $scope.model.email,
                    'address': $scope.model.address,
                    'company': $scope.model.company
                },
                headers:{
                    'Content-Type': 'application/json'
                }
                }).success(function(data,header,config,status){
                    if(data.code=='0'){
                        console.log('update user profile success');
                        $scope.updateGlobalUserProfile();
                        $scope.back();
                    }else{
                        console.log('update user profile fail: '+data.message);
                        $scope.back();
                    }
                    $rootScope.touchEnd('saveButton');

                }).error(function(data,header,config,status){
                    console.log('update user profile fail');
                    $rootScope.touchEnd('saveButton');
                    
            });
    };

    $scope.reset();
    
    $scope.showSummaryScreen();

  });

