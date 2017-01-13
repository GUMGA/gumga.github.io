const Error = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/error/'+$scope.versionDocs+'/error.html';
          }

        }
    }
}

Error.$inject = [];

export default Error;
