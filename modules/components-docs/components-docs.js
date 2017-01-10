import { ComponentsController } from './controllers/ComponentsController'
import ComponentsService  from './services/ComponentsService'
import Templates  from './templates/templates'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.components', {
            url: '/components',
            controller: 'ComponentsController',
            controllerAs: '$ctrl',
            templateUrl: './modules/components-docs/views/components.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.components', [Templates])
                .controller('ComponentsController', ComponentsController)
                .service('ComponentsService', ComponentsService)
                .config(Routers);

export default module.name;
