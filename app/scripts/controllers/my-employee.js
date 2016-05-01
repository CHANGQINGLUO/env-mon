'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyEmployeeCtrl', function ($scope,$rootScope,$location,$http) {


  	$scope.employeelist=[];
    $scope.employee={};


    $scope.isListScreen = true;   
    if($rootScope.mockMode){
    	$scope.employeeList = [{"name":"乔健辉","hp":"18766669999","email":"jianhui@qq.com","creationDate":"2016-02-23","address":"蓝谷地"},{"name":"罗长青","hp":"18428396758","email":"changqing@qq.com","creationDate":"2016-02-23","address":"绿地468公馆"}];
    }else
        $http({
            url:$rootScope.hostUrl+'getInternalUserList',
            method:'POST',
            data:{
                'loginId':$rootScope.userProfile.id
            },
            headers:{
                'Content-Type': 'application/json'
            }
            }).success(function(data,header,config,status){
                console.log('get employee list success');
                $scope.employeeList = data.body;
                $scope.employeeSize = data.body.length;
            }).error(function(data,header,config,status){
                console.log('get employee list fail');
                
        });

        $scope.selectEmployee = function(loginId,name, email, phone, address, company, creationDate){
            $scope.employee = {"name":name, "email":email, "phone":phone, "address":address, "company":company, "creationDate":creationDate};
            $scope.isListScreen = false;
            $rootScope.proxyLoginId=loginId;
        };
        $scope.back = function(){
            $scope.isListScreen = true;
        };
  });
