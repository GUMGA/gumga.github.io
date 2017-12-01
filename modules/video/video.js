import { VideoController } from './controllers/VideoController'

const Routers = $stateProvider => {

      $stateProvider
        .state('app.video', {
            url: '/video',
            controller: 'VideoController',
            controllerAs: '$ctrl',
            templateUrl: './modules/video/views/video.html'
        })

}

Routers.$inject = ['$stateProvider'];

const module = angular.module('app.video', [])
                .controller('VideoController', VideoController)
                .config(Routers);

export default module.name;
