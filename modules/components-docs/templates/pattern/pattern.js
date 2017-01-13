const Pattern = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/pattern/'+$scope.versionDocs+'/pattern.html';
          }

        }
    }
}

Pattern.$inject = [];

export default Pattern;
