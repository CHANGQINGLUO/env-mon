'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('EnvHealthCtrl', function ($scope,$rootScope,$location,$http) {
    $scope.isListScreen = true;
    $scope.articleList = $rootScope.articleList;


    $scope.getArticlesbyType = function(type){
        if($rootScope.mockMode){
            $scope.articleList = [{"title":"影响室内空气质量的因素","content":"1.html","creationDate":"2016-2-18"},
                                  {"title":"家具生活几大健康隐患","content":"2.html","creationDate":"2016-2-18"},
                                  {"title":"室内环境污染误区","content":"3.html","creationDate":"2016-2-18"},
                                  {"title":"正确认识室内空气有害物质TVOC","content":"4.html","creationDate":"2016-2-18"}];
            $rootScope.articleList=$scope.articleList;
            $rootScope.directInside("env-health");
        }else{
            $rootScope.loading('加载中...');
             $http({
                url:$rootScope.hostUrl+'getArticlesByType',
                method:'POST',
                data:{
                    "type":type
                },
                headers:{
                    'Content-Type': 'application/json'
                }
                }).success(function(data,header,config,status){

                    console.log('get article list success');
                    $rootScope.closePopup();
                    $scope.articleList = data.body;
                    $rootScope.articleList=$scope.articleList;
                    $rootScope.directInside("env-health");
                }).error(function(data,header,config,status){
                    console.log('get article list fail');
                    $rootScope.popup('加载失败, 请稍后重试');
            });
        }
        
    }
        
    
    $scope.selectArticle = function(content){
        $("#env-health-details").html(content);
        $scope.isListScreen = false;    
    };
    $scope.back = function(){
        $scope.isListScreen = true;
    };
  });
