const Header = () => {
    return {
        restrict: 'E',
        templateUrl: './modules/directives/header/header.html',
        scope: {
          showIconMenu: '='
        },
        link: ($scope) =>{

          $scope.navCollapse = function() {
             var el = document.querySelector('.gumga-layout nav.gl-nav')
             el ? el.classList.toggle('collapsed') : angular.noop;
           }

           $scope.asideCollapse = function() {
             document.querySelector('.gumga-layout aside.gl-aside')
               .classList.toggle('collapsed')
           }

           $scope.toggleSearch = function() {
             document.querySelector('header > .searchbar')
               .classList.toggle('searchShow')
           }

        }
    }
}

Header.$inject = [];

export default Header;
