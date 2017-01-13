const Max = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/max/'+$scope.versionDocs+'/max.html';
          }

        }
    }
}

Max.$inject = [];

export default Max;
