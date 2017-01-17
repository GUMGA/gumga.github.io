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

}

Routers.$inject = [
    '$stateProvider'
    ,'$urlRouterProvider'
    ,'$httpProvider'];
