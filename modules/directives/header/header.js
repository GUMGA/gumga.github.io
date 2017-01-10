const Header = () => {
    return {
        restrict: 'E',
        templateUrl: './modules/directives/header/header.html',
        scope: {
        },
        link: ($scope) =>{

          $scope.navCollapse = function() {
             document.querySelector('.gumga-layout nav.gl-nav')
               .classList.toggle('collapsed')
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
