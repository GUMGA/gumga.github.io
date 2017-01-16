const Nav = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/nav/'+$scope.versionDocs+'/nav.html';
          }

        }
    }
}

Nav.$inject = [];

export default Nav;
