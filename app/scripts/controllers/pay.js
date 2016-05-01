'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('PayCtrl', function ($scope,$rootScope,$location,$http) {
    $scope.payTypeSelected = false;
    $scope.selectPayType = function(type){
        if(type=='wechat')
            $('#wechat-image').attr('src','./images/icon/radio-button_on.png');
        $scope.payTypeSelected = true;
    }
    $scope.payOrder = function(){
        if(!$scope.payTypeSelected){
            $rootScope.popup('请选择支付方式');
        }else{
            
            Wechat.isInstalled(function (installed) {
                $http({
                    url:$rootScope.hostUrl+'pay',
                    method:'POST',
                    data:{
                        'out_trade_no':$rootScope.orderNumber
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        console.log('generate preorder success');
                        //打开微信支付
                        if(data.code=='0'){
                            $scope.invokeWechat(data.body);
                        }else{
                            $rootScope.popup('生成预付单失败');
                        }
                    }).error(function(data,header,config,status){
                        console.log('生成预付单失败');
                });
            }, function (reason) {
                $rootScope.popup('未安装微信');
            });
            /*
            $http({
                    url:$rootScope.hostUrl+'pay',
                    method:'POST',
                    data:{
                        'out_trade_no':$rootScope.orderNumber
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        console.log('generate preorder success');
                        //打开微信支付
                        if(data.code=='0'){
                            $scope.invokeWechat(data.body);
                        }else{
                            $rootScope.popup('生成预付单失败');
                        }
                        //$location.path("/pay");
                    }).error(function(data,header,config,status){
                        $rootScope.popup('生成预付单失败');
                });
            */
        }
    }
    $scope.invokeWechat = function(payDTO){
        
        var params = {
                        partnerid: payDTO.mch_id, // merchant id
                        prepayid: payDTO.prepay_id, // prepay id
                        noncestr: payDTO.nonce_str, // nonce
                        timestamp: payDTO.timestamp, // timestamp
                        sign: payDTO.sign, // signed string
                    };

        Wechat.sendPaymentRequest(params, function () {
            $scope.checkPayStatus($rootScope.orderNumber);
        }, function (reason) {
            $rootScope.popup("支付失败");
        });
        
        //$scope.checkPayStatus($rootScope.orderNumber);
    }
    $scope.checkPayStatus = function(orderNumber){
        $http({
                    url:$rootScope.hostUrl+'getOrderByNumber',
                    method:'POST',
                    data:{
                        'orderNumber':orderNumber
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        console.log('get order details success');
                        if(data.code=='0' && data.body.status=='I'){
                            $rootScope.popup("支付成功");
                            $location.path("/my-order");
                        }
                        else
                            $rootScope.popup("支付失败");

                    }).error(function(data,header,config,status){
                        $rootScope.popup("支付失败");
                });
    }

});
