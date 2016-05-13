'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('EnvHealthNavCtrl', function ($scope,$rootScope,$location,$http) {
    $scope.isListScreen = true;
    $scope.isMainListScreen = true;
    $scope.articleList = $rootScope.articleList;
    $scope.articleList1 = $rootScope.articlesAndProducts.articleList1;
    $scope.articleList2 = $rootScope.articlesAndProducts.articleList2;
    $scope.articleList3 = $rootScope.articlesAndProducts.articleList3;
    $scope.articleList4 = $rootScope.articlesAndProducts.articleList4;
        //$rootScope.directInside("env-health-nav");
    

    $scope.selectMainArticle = function(content){
        $("#env-health-main-details").html(content);
        $scope.isMainListScreen = false;    
    };
    $scope.getArticlesbyType = function(type){
        if(type=='1') $rootScope.articleList = $scope.articleList1;
        else if(type=='2') $rootScope.articleList = $scope.articleList2;
        else if(type=='3') $rootScope.articleList = $scope.articleList3;
        else if(type=='4') $rootScope.articleList = $scope.articleList4;
        $rootScope.directInside('env-health');
    }
    $scope.mainBack = function(){
        $scope.isMainListScreen = true;
    };
  });
