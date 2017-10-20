import { GeradorController } from './controllers/GeradorController'
import GeradorService  from './services/GeradorService'
import Templates  from './templates/templates'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.gerador', {
            url: '/gerador/:version',
            controller: 'GeradorController',
            controllerAs: '$ctrl',
            templateUrl: './modules/gerador-docs/views/gerador.html'
        })

}

Routers.$inject = ['$stateProvider'];


const module = angular.module('app.gerador', [Templates])
                .controller('GeradorController', GeradorController)
                .service('GeradorService', GeradorService)
                .config(Routers);

export default module.name;
