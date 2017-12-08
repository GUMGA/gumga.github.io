import { SpringCloudDiscoveryController } from './controllers/SpringCloudDiscoveryController'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.springclouddiscovery', {
            url: '/spring-cloud-discovery',
            controller: 'SpringCloudDiscoveryController',
            controllerAs: '$ctrl',
            templateUrl: './modules/spring-cloud-discovery/views/springclouddiscovery.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.springclouddiscovery', [])
                .controller('SpringCloudDiscoveryController', SpringCloudDiscoveryController)
                .config(Routers);

export default module.name;
