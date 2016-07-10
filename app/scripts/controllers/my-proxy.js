'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyProxyCtrl', function ($scope,$rootScope,$location,$http) {


  	$scope.proxyList=[];
    $scope.proxy={};
    if($rootScope.userProfile.role=='admin')
        $scope.proxyLoginId = $rootScope.proxyLoginId;
    else
        $scope.proxyLoginId = $rootScope.userProfile.id;

    $scope.isListScreen = true;   
    if($rootScope.mockMode){
    	$scope.proxyList = [{"name":"乔健辉","hp":"18766669999","email":"jianhui@qq.com","creationDate":"2016-02-23","address":"蓝谷地"},{"name":"罗长青","hp":"18428396758","email":"changqing@qq.com","creationDate":"2016-02-23","address":"绿地468公馆"}];
    }else
        $http({
            url:$rootScope.hostUrl+'getAdvisorsByInternalUser',
            method:'POST',
            data:{
                'loginId':$scope.proxyLoginId
            },
            headers:{
                'Content-Type': 'application/json'
            }
            }).success(function(data,header,config,status){
                console.log('get proxy list success');
                $scope.proxyList = data.body;
                $scope.proxySize = data.body.length;
            }).error(function(data,header,config,status){
                console.log('get proxy list fail');
                
        });

        $scope.selectProxy = function(loginId,name, email, phone, address, company, creationDate){
            $scope.proxy = {"loginId":loginId, "name":name, "email":email, "phone":phone, "address":address, "company":company, "creationDate":creationDate};
            $scope.isListScreen = false;
            $rootScope.selectedAdvisor = loginId;
        };
        $scope.back = function(){
            $scope.isListScreen = true;
        };
  });
