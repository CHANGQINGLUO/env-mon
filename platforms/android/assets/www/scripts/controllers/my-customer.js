'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyCustomerCtrl', function ($scope,$rootScope,$location,$http) {


  	$scope.customerList=[];
    $scope.customer={};

    if($rootScope.userProfile.role=='internal')
        $scope.advisorId = $rootScope.selectedAdvisor;
    else
        $scope.advisorId = $rootScope.userProfile.id;

    $scope.isListScreen = true;   
    if($rootScope.mockMode){
    	$scope.customerList = [{"name":"乔健辉","hp":"18766669999","email":"jianhui@qq.com","creationDate":"2016-02-23","address":"蓝谷地"},{"name":"罗长青","hp":"18428396758","email":"changqing@qq.com","creationDate":"2016-02-23","address":"绿地468公馆"}];
    }else
        $http({
            url:$rootScope.hostUrl+'getCustomerListByAdvisor',
            method:'POST',
            data:{
                'loginId':$scope.advisorId
            },
            headers:{
                'Content-Type': 'application/json'
            }
            }).success(function(data,header,config,status){
                console.log('get customer list success');
                $scope.customerList = data.body;
            }).error(function(data,header,config,status){
                console.log('get customer list fail');
                
        });

        $scope.selectCustomer = function(loginId,name, email, phone, address, company, creationDate){
            $scope.customer = {"name":name, "email":email, "phone":phone, "address":address, "company":company, "creationDate":creationDate};
            $scope.isListScreen = false;
            $rootScope.orderLoginId=loginId;
        };
        $scope.back = function(){
            $scope.isListScreen = true;
        };
  });
