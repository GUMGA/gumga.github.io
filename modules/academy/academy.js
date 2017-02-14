import { AcademyController } from './controllers/AcademyController'
import AcademyService  from './services/AcademyService'
import Templates  from './templates/templates'

const Routers = $stateProvider => {

    $stateProvider
        .state('app.academy', {
            url: '/academy/:version',
            controller: 'AcademyController',
            controllerAs: '$ctrl',
            templateUrl: './modules/academy/views/academy.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.academy', [Templates])
    .controller('AcademyController', AcademyController)
    .service('AcademyService', AcademyService)
    .config(Routers);

export default module.name;
