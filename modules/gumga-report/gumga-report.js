import { GumgaReportController } from './controllers/GumgaReportController'
import GumgaReportService  from './services/GumgaReportService'
import Templates  from './templates/templates'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.gumgaReport', {
            url: '/gumga-report/:version',
            controller: 'GumgaReportController',
            controllerAs: '$ctrl',
            templateUrl: './modules/gumga-report/views/gumga-report.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.gumgaReport', [Templates])
                .controller('GumgaReportController', GumgaReportController)
                .service('GumgaReportService', GumgaReportService)
                .config(Routers);

export default module.name;
