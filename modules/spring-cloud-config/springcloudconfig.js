import { SpringCloudConfigController } from './controllers/SpringCloudConfigController'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.springcloudconfig', {
            url: '/spring-cloud-config',
            controller: 'SpringCloudConfigController',
            controllerAs: '$ctrl',
            templateUrl: './modules/spring-cloud-config/views/springcloudconfig.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.springcloudconfig', [])
                .controller('SpringCloudConfigController', SpringCloudConfigController)
                .config(Routers);

export default module.name;
