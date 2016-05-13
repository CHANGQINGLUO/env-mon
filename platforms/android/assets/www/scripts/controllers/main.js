'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope,$rootScope,$location,$http) {


    $scope.imageUrl = $rootScope.downloadUrl;

    $scope.currentPage=1;
    $scope.maxPages=3;
    
    $scope.isListScreen = true;

    $scope.isUserLogin = $rootScope.isUserLogin;

    $scope.newsList = [];
    
    $scope.isOnline = $rootScope.connection().isOnline;

    if($rootScope.articlesAndProducts != null)
        $scope.newsList = $rootScope.articlesAndProducts.articleList5;
    $scope.selectMainItem = function(content){
        $("#home-details").html(content);
        $scope.isListScreen = false;
    };
    $scope.back = function(){
        $scope.isListScreen = true;
    };

    $scope.swipeImage = function(direction){
        if(direction=='left'){
            $scope.currentPage = $scope.currentPage +1 ;
            if($scope.currentPage>$scope.maxPages)
                $scope.currentPage=$scope.maxPages;


        }else if(direction='right'){
            $scope.currentPage = $scope.currentPage - 1 ;
            if($scope.currentPage<=0)
                $scope.currentPage=1;
        }
        $("#mainImage").attr('src',$scope.imageUrl+"downloadMainImage?id="+$scope.currentPage);
    };
    
  });
