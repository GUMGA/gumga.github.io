import { ComponentController } from './controllers/ComponentController'
import ComponentService from './services/ComponentService'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.component', {
            url: '/component',
            controller: 'ComponentController',
            controllerAs: '$ctrl',
            templateUrl: './modules/component-docs/views/component-docs.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.component', [])
                .controller('ComponentController', ComponentController)
                .service('ComponentService', ComponentService)
                .config(Routers);

export default module.name;
