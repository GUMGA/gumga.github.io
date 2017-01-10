import { HeaderController } from './controller'

const Header = () => {
    return {
        restrict: 'E',
        templateUrl: './modules/directives/header/header.html',
        scope: {
        },
        controllerAs: '$ctrl',
        controller: HeaderController
    }
}

Header.$inject = [];

export default Header;
