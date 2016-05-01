'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyIncomeCtrl', function ($scope,$rootScope,$location,$http) {
 

    $scope.isListScreen = true;;

    if($rootScope.mockMode){
    	$scope.income = 0;
    }else{
        $http({
            url:$rootScope.hostUrl+'getIncome',
            method:'POST',
            data:{
                'loginId':$rootScope.userProfile.id
            },
            headers:{
                'Content-Type': 'application/json'
            }
            }).success(function(data,header,config,status){
                console.log('get income success');
                $scope.income = data.body.totalIncome;
                $scope.payment = data.body.totalPayment;
                $scope.outstanding = data.body.totalOutstanding;
            }).error(function(data,header,config,status){
                console.log('get income fail');
                
        });
        $http({
            url:$rootScope.hostUrl+'getIncomeList',
            method:'POST',
            data:{
                'loginId':$rootScope.userProfile.id
            },
            headers:{
                'Content-Type': 'application/json'
            }
            }).success(function(data,header,config,status){
                console.log('get income success');
                $scope.incomeList = data.body;
            }).error(function(data,header,config,status){
                console.log('get income fail');
                
        });
        }

        $scope.selectIncome = function(uuid){
            if($rootScope.mockMode){
                $scope.incomeDTO = {};
            }else
                $http({
                    url:$rootScope.hostUrl+'getIncomeById',
                    method:'POST',
                    data:{
                        'uuid':uuid
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).success(function(data,header,config,status){
                        console.log('get income details success');
                        $scope.incomeDTO = data.body;
                        $scope.isListScreen = false;
                    }).error(function(data,header,config,status){
                        console.log('get income details fail');
                
                });
        };
        $scope.back = function(){
            $scope.isListScreen = true;
        }
});
