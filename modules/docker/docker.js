import { Docker } from './controllers/Docker'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.docker', {
            url: '/docker',
            controller: 'Docker',
            controllerAs: '$ctrl',
            templateUrl: './modules/docker/views/docker.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.docker', [])
                .controller('Docker', Docker)
                .config(Routers);

export default module.name;
