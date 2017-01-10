export default function Routers(
    $stateProvider
    ,$urlRouterProvider){

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
    ,'$urlRouterProvider'];
