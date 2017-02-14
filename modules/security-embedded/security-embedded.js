import { SecurityEmbeddedController } from './controllers/SecurityEmbeddedController'
import SecurityEmbeddedService  from './services/SecurityEmbeddedService'
import Templates  from './templates/templates'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.security', {
            url: '/security-embedded/:version',
            controller: 'SecurityEmbeddedController',
            controllerAs: '$ctrl',
            templateUrl: './modules/security-embedded/views/security-embedded.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.securityEmbedded', [Templates])
                .controller('SecurityEmbeddedController', SecurityEmbeddedController)
                .service('SecurityEmbeddedService', SecurityEmbeddedService)
                .config(Routers);

export default module.name;
