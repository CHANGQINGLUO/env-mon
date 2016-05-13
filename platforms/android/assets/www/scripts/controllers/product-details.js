'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ProductDetailsCtrl', function ($scope,$rootScope,$location,$http,$sce) {

    //$scope.currentDetectType='building';
    $scope.order=function(){
        $location.path("/order");
    }
    
    if($rootScope.mockMode){
    	$scope.product = [{"uuid":"1","name":"一套一","type":"F","id":"F1","price":1200,"description":"D1"}];
    }else
        $http({
            url:$rootScope.hostUrl+'getProductByUUID',
            method:'POST',
            data:{
                'uuid':$rootScope.product.uuid
            },
            headers:{
                'Content-Type': 'application/json'
            }
            }).success(function(data,header,config,status){
                console.log('get product success');
                $scope.product = data.body;
                $rootScope.product = data.body;
                $scope.product.trustedDescription = $sce.trustAsHtml($scope.product.description);
            }).error(function(data,header,config,status){
                console.log('get product fail');
                
        });
  });
