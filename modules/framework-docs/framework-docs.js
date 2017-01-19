import { FrameworkController } from './controllers/FrameworkController'
import FrameworkService  from './services/FrameworkService'
import Templates  from './templates/templates'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.framework', {
            url: '/framework/:version',
            controller: 'FrameworkController',
            controllerAs: '$ctrl',
            templateUrl: './modules/framework-docs/views/components.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.framework', [Templates])
                .controller('FrameworkController', FrameworkController)
                .service('FrameworkService', FrameworkService)
                .config(Routers);

export default module.name;
