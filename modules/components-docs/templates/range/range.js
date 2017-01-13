const Range = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/range/'+$scope.versionDocs+'/range.html';
          }

        }
    }
}

Range.$inject = [];

export default Range;
