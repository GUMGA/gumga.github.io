import { FreshdeskController } from './controllers/freshdesk'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.freshdesk', {
            url: '/freshdesk',
            controller: 'FreshdeskController',
            controllerAs: '$ctrl',
            templateUrl: './modules/freshdesk/views/freshdesk.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.freshdesk', [])
                .controller('FreshdeskController', FreshdeskController)
                .config(Routers);

export default module.name;
