'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'hmTouchEvents'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/register-proxy', {
        templateUrl: 'views/register-proxy.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/reset', {
        templateUrl: 'views/reset.html',
        controller: 'ResetCtrl',
        controllerAs: 'reset'
      })
      .when('/changePassword', {
        templateUrl: 'views/change-password.html',
        controller: 'ChangePwdCtrl',
        controllerAs: 'change-password'
      })
      .when('/env-health-nav', {
        templateUrl: 'views/env-health-nav.html',
        controller: 'EnvHealthNavCtrl',
        controllerAs: 'env-health'
      })
      .when('/env-health', {
        templateUrl: 'views/env-health.html',
        controller: 'EnvHealthCtrl',
        controllerAs: 'env-health'
      })
      .when('/air-quality', {
        templateUrl: 'views/air-quality.html',
        controller: 'AirQualityCtrl',
        controllerAs: 'air-quality'
      })
      .when('/pollution-detect-nav', {
        templateUrl: 'views/pollution-detect-nav.html',
        controller: 'PollutionDetectCtrl',
        controllerAs: 'pollution-detect'
      })
      .when('/product-list', {
        templateUrl: 'views/product-list.html',
        controller: 'ProductListCtrl',
        controllerAs: 'product-list'
      })
      .when('/product-details', {
        templateUrl: 'views/product-details.html',
        controller: 'ProductDetailsCtrl',
        controllerAs: 'product-details'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
      })
      .when('/pay', {
        templateUrl: 'views/pay.html',
        controller: 'PayCtrl',
        controllerAs: 'pay'
      })
      .when('/my-order', {
        templateUrl: 'views/my-order.html',
        controller: 'MyOrderCtrl',
        controllerAs: 'my-order'
      })
      .when('/my-order-detail', {
        templateUrl: 'views/my-order-detail.html',
        controller: 'MyOrderDetailCtrl',
        controllerAs: 'my-order-detail'
      })
      .when('/my-income', {
        templateUrl: 'views/my-income.html',
        controller: 'MyIncomeCtrl',
        controllerAs: 'my-income'
      })
      .when('/my-report-list', {
        templateUrl: 'views/my-report-list.html',
        controller: 'MyReportListCtrl',
        controllerAs: 'my-report-list'
      })
      .when('/my-report', {
        templateUrl: 'views/my-report.html',
        controller: 'MyReportCtrl',
        controllerAs: 'my-report'
      })
      .when('/my-proxy', {
        templateUrl: 'views/my-proxy.html',
        controller: 'MyProxyCtrl',
        controllerAs: 'my-proxy'
      })
      .when('/my-employee', {
        templateUrl: 'views/my-employee.html',
        controller: 'MyEmployeeCtrl',
        controllerAs: 'my-employee'
      })
      .when('/my-airquality', {
        templateUrl: 'views/my-airquality.html',
        controller: 'MyAirQualityCtrl',
        controllerAs: 'my-airquality'
      })
      .when('/pollution-detect', {
        templateUrl: 'views/pollution-detect.html',
        controller: 'PollutionDetectCtrl',
        controllerAs: 'pollution-detect'
      })
      .when('/building-1', {
        templateUrl: 'views/building-1.html'
      })
      .when('/building-2', {
        templateUrl: 'views/building-2.html'
      })
      .when('/indoor-1', {
        templateUrl: 'views/building-1.html'
      })
      .when('/indoor-2', {
        templateUrl: 'views/indoor-2.html'
      })
      .when('/indoor-3', {
        templateUrl: 'views/indoor-3.html'
      })
      .when('/indoor-4', {
        templateUrl: 'views/indoor-4.html'
      })
      .when('/indoor-5', {
        templateUrl: 'views/indoor-5.html'
      })
      .when('/indoor-6', {
        templateUrl: 'views/indoor-6.html'
      })
      .when('/indoor-7', {
        templateUrl: 'views/indoor-7.html'
      })
      .when('/air', {
        templateUrl: 'views/air.html'
      })
      .when('/tvoc', {
        templateUrl: 'views/tvoc.html'
      })
      .when('/my-service', {
        templateUrl: 'views/my-service.html',
        controller: 'MyServiceCtrl',
        controllerAs: 'my-service'
      })
      .when('/my-service-nav', {
        templateUrl: 'views/my-service-nav.html',
        controller: 'MyServiceCtrl',
        controllerAs: 'my-service'
      })
      .when('/my-info', {
        templateUrl: 'views/my-info.html',
        controller: 'MyInfoCtrl',
        controllerAs: 'my-info'
      })
      .when('/my-customer', {
        templateUrl: 'views/my-customer.html',
        controller: 'MyCustomerCtrl',
        controllerAs: 'my-customer'
      })
      .when('/my-barcode', {
        templateUrl: 'views/my-barcode.html'
      })
      .when('/about-company', {
        templateUrl: 'views/about-company.html',
        controller: 'AboutCompanyCtrl',
        controllerAs: 'about-company'
      })
      .when('/about-app', {
        templateUrl: 'views/about-app.html',
        controller: 'AboutAppCtrl',
        controllerAs: 'about-app'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist(['self','http://192.168.0.104:8082/mb-bg-ext-web/**','http://120.76.96.199:8080/mb-bg-ext-web/**','https://api.heweather.com/x3/weather/**']);
  })
  .run(function($rootScope,$location,$http){

      /** host url*/
      //$rootScope.hostUrl = "http://192.168.0.109:8080/mb-bg-ext-web/rest/";
      $rootScope.hostUrl = "http://120.76.96.199:8080/mb-bg-ext-web/rest/";
      //$rootScope.downloadUrl = "http://192.168.0.109:8080/mb-bg-ext-web/download/";
      $rootScope.downloadUrl = "http://120.76.96.199:8080/mb-bg-ext-web/download/";
      /** true for non host, false for  host */
      $rootScope.mockMode = false ;
      /** to identity user whether user has logged in*/
      $rootScope.isUserLogin = false;

      $rootScope.touchStart = function(id){
          $('#'+id).css('background-color','gray');
      }

      $rootScope.touchEnd = function(id){
          $('#'+id).css('background-color','#39c812');
      }
      /** direct between menus */
      $rootScope.direct = function(page){
        $rootScope.currentTab = page;
        $location.path('/'+page);
      }
      /** direct within menu */
      $rootScope.directInside = function(page){
        $location.path('/'+page);
      }

      $rootScope.isTabSelected = function(page){
        return $rootScope.currentTab == page;
      }

      $rootScope.popup = function(content){
        $('.mask').css('visibility', 'visible');
        $('.popup').css('visibility', 'visible');
        $('.popup-button').css('visibility', 'visible');
        $rootScope.popupContent=content;
      }
      $rootScope.loading = function(content){
        $rootScope.popup(content);
        $('.popup-button').css('visibility', 'hidden');
      }
      $rootScope.closePopup = function(){
        $('.mask').css('visibility', 'hidden');
        $('.popup').css('visibility', 'hidden');
        $('.popup-button').css('visibility', 'hidden');
      }
      $rootScope.connection = function() {
        try {
          var states = {};
          var connectionType = "";
          var status = "";
          var isOnline = false;
          if (!navigator.onLine) {
            status = "offline";
            isOnline = false;
          }
          else {
            status = "online";
            isOnline = true;
          }
          return {
                "status" : status,
                "type" : connectionType,
                "isOnline" : isOnline
                }
          
          } catch (err) {
            console.log("[Error] networkStatus :: " + err.message);
          }
      }
      if($rootScope.connection().isOnline){
        $http({
            url:$rootScope.hostUrl+'getArticlesAndProducts',
            method:'POST',
            data:{
                
            },
            headers:{
                'Content-Type': 'application/json'
            }
            }).success(function(data,header,config,status){
                console.log('get articles and products list success');
                $rootScope.articlesAndProducts = data.body;
                /** direct to login page */
                $rootScope.direct('main');
                //$scope.isListScreen = true;
            }).error(function(data,header,config,status){
                console.log('articles and products list product list fail');
                /** direct to login page */
                $rootScope.articlesAndProducts = {};
                $rootScope.direct('main');
        });
        if(localStorage.id != null && localStorage.id != '' && localStorage.id != undefined){
            $http({
                url:$rootScope.hostUrl+'login',
                method:'POST',
                data:{
                    'loginId':localStorage.id,
                    'password': localStorage.password
                },
                headers:{
                    'Content-Type': 'application/json'
                }
                }).success(function(data,header,config,status){
                    if(data.code=='0'){
                        console.log('login success');
                        $rootScope.userProfile={'id':data.body.loginId,'name':data.body.name,'email':data.body.email,'phone':data.body.hp,'role':data.body.role,'address':data.body.address,'company':data.body.company,'clientCode':data.body.clientCode};
                        $rootScope.isUserLogin = true; 
                    }else{
                        console.log('auto login failed');
                    }
                    
                }).error(function(data,header,config,status){
                    console.log('auto login failed');
            });
        }

      }else{
          $rootScope.articlesAndProducts = {};
          $rootScope.direct('main');
        }

      

  });
