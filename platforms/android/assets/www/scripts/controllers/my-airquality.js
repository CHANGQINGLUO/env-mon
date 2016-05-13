'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MyAirQualityCtrl', function ($scope,$rootScope,$location,$http) {


        $http({
            url:$rootScope.hostUrl+'getAirQuality',
            method:'GET',
            data:{
                
            },
            headers:{
                'Content-Type': 'application/json'
            }
            }).success(function(data,header,config,status){
                console.log('get air quality data success');
                $scope.airQualityData = JSON.parse(data.body)['HeWeather data service 3.0'][0].aqi.city;
            }).error(function(data,header,config,status){
                console.log('get air quality data fail');
                
        });
        $scope.isAirLiang=function(qlty){
            return qlty == '良';
        }

  });
