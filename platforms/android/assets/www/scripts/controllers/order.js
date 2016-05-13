'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('OrderCtrl', function ($scope,$rootScope,$location,$http) {

    if(!$rootScope.isUserLogin){
        $rootScope.direct('login');
    }

    $scope.orderDetails={
            "productId":$rootScope.product.id,
            "productName": $rootScope.product.name,
            "productDescription": $rootScope.product.description,
            "price": $rootScope.product.price,
            "prePrice": $rootScope.product.prePrice,
            "points": $rootScope.product.points,
            "count": 1,
            "customerName":$rootScope.userProfile.name,
            "mailAddress":$rootScope.userProfile.address,
            "phone":$rootScope.userProfile.phone,
            "status":'C',
            "amount":$rootScope.product.price * 1,
            "preAmount":$rootScope.product.prePrice * 1
    };
    $scope.changeUnit = function(){
        $scope.orderDetails.amount = $scope.orderDetails.price * $scope.orderDetails.count;
    };
    $scope.addOrder=function(){

        if($rootScope.mockMode){
            $location.path("/my-order");
        }else{
            if(!ValidationService.validateName($rootScope,$scope.orderDetails.customerName)||
                !ValidationService.validatePhone($rootScope,$scope.orderDetails.phone)||
                !ValidationService.validateAddress($rootScope,$scope.orderDetails.mailAddress)) {
                $scope.invalidUserPassword = true;
                return;
            }else
                $http({
                    url:$rootScope.hostUrl+'addOrder',
                    method:'POST',
                    data:{
                        'loginId':$rootScope.userProfile.id,
                        'productId': $scope.orderDetails.productId,
                        'productName': $scope.orderDetails.productName,
                        'count': $scope.orderDetails.count,
                        'customerName': $scope.orderDetails.customerName,
                        'mailAddress':$scope.orderDetails.mailAddress,
                        'phone': $scope.orderDetails.phone,
                        'status': $scope.orderDetails.status,
                        'amount': $scope.orderDetails.price*$scope.orderDetails.count,
                        'preAmount': $scope.orderDetails.preAmount
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        console.log('add order success');
                        //$rootScope.popup("成功添加订单");
                        $rootScope.orderNumber = data.body.orderNumber;
                        $location.path("/pay");
                    }).error(function(data,header,config,status){
                        console.log('add order fail');
                });
        } 
    };
});
