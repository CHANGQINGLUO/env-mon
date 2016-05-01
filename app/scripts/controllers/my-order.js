'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyOrderCtrl', function ($scope,$rootScope,$location,$http) {


  	$scope.orderList=[];
    $scope.order={};
    $scope.selectedStatus="C";
    if($rootScope.userProfile.role=='advisor')
        $scope.orderLoginId = $rootScope.orderLoginId;
    else
        $scope.orderLoginId = $rootScope.userProfile.id;

    $scope.isListScreen = true;   
    $scope.getOrderList = function(){
        if($rootScope.mockMode){
            
        }else
            $http({
                url:$rootScope.hostUrl+'getOrderList',
                method:'POST',
                data:{
                    'loginId':$scope.orderLoginId,
                },
                headers:{
                    'Content-Type': 'application/json'
                }
                }).success(function(data,header,config,status){
                    console.log('get order list success');
                    $scope.orderList = data.body;
                }).error(function(data,header,config,status){
                    console.log('get order list fail');
                    
            });
    }
    

        $scope.selectOrder = function(orderNumber){

            $rootScope.orderNumber = orderNumber;
            $location.path('/my-order-detail');

        };

        $scope.selectStatus = function(status){

            $scope.selectedStatus=status;

        }
        $scope.getOrderList();

  });
