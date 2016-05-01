'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:PollutionDetectCtrl
 * @description
 * # PollutionDetectCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ProductListCtrl', function ($scope,$rootScope,$location,$http) {

    $scope.currentDetectType='building';

    $scope.imageUrl = $rootScope.downloadUrl;

    $scope.selectProduct=function(uuid){
        $rootScope.product={"uuid":uuid};
        $location.path("/product-details");
    }
    $scope.fProductList = $rootScope.articlesAndProducts.fProductList;
    $scope.aProductList = $rootScope.articlesAndProducts.aProductList;
    $scope.oProductList = $rootScope.articlesAndProducts.oProductList;
    $scope.cProductList = $rootScope.articlesAndProducts.cProductList;

        $scope.back = function(){
            $scope.isListScreen = true;
        };
  });
