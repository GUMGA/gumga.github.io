const Menu = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/menu/'+$scope.versionDocs+'/menu.html';
          }

        }
    }
}

Menu.$inject = [];

export default Menu;
