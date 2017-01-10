import { HomeController } from './controllers/HomeController'
import HomeService  from './services/HomeService'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.home', {
            url: '/home',
            controller: 'HomeController',
            controllerAs: '$ctrl',
            templateUrl: './modules/home/views/home.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.home', [])
                .controller('HomeController', HomeController)
                .service('HomeService', HomeService)
                .config(Routers);

export default module.name;
