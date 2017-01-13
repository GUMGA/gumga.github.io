const Required = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/required/'+$scope.versionDocs+'/required.html';
          }

        }
    }
}

Required.$inject = [];

export default Required;
