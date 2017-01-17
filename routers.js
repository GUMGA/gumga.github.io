export default function Routers(
    $stateProvider
    ,$urlRouterProvider
    ,$httpProvider){

      $urlRouterProvider.otherwise('/app/home');

      $stateProvider
        .state('app', {
              abstract: true,
              url: '/app',
              template: '<div ui-view></div>'
          })


      $httpProvider.defaults.headers.common['Pragma'] = 'no-cache';
      $httpProvider.defaults.headers.common["Cache-Control"] = "no-cache";
      $httpProvider.defaults.headers.common["If-Modified-Since"] = "0";

}

Routers.$inject = [
    '$stateProvider'
    ,'$urlRouterProvider'
    ,'$httpProvider'];
