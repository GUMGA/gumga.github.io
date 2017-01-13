const Errors = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/errors/'+$scope.versionDocs+'/errors.html';
          }

          $scope.minNumber = 13;

        }
    }
}

Errors.$inject = [];

export default Errors;
