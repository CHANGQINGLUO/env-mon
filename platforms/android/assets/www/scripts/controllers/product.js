'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ProductCtrl', function ($scope,$rootScope,$location,$http) {

    $scope.currentDetectType='building';
    $scope.selectDetectType=function(detectType){
        $scope.currentDetectType=detectType;
        if(detectType=='tvoc')
            $scope.sourceHtml = "views/tvoc.html";
        else if(detectType=='airs')
            $scope.sourceHtml = "views/airs.html";
    }
    $scope.isTypeSelected=function(detectType){
        return $scope.currentDetectType==detectType;
    }
    /**
  	$scope.customerList=[];
    $scope.customer={};


    $scope.isListScreen = true;   
    if($rootScope.mockMode){
    	$scope.customerList = [{"name":"乔健辉","hp":"18766669999","email":"jianhui@qq.com","creationDate":"2016-02-23","address":"蓝谷地"},{"name":"罗长青","hp":"18428396758","email":"changqing@qq.com","creationDate":"2016-02-23","address":"绿地468公馆"}];
    }else
        $http({
            url:$rootScope.hostUrl+'getCustomerListByAdvisor',
            method:'POST',
            data:{
                'loginId':$rootScope.userProfile.id
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

        $scope.selectCustomer = function(name, email, phone, address, company, creationDate){
            $scope.customer = {"name":name, "email":email, "phone":phone, "address":address, "company":company, "creationDate":creationDate};
            $scope.isListScreen = false;
        };**/
        $scope.back = function(){
            $scope.isListScreen = true;
        };
  });
