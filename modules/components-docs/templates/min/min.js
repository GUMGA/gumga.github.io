const Min = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/min/'+$scope.versionDocs+'/min.html';
          }

        }
    }
}

Min.$inject = [];

export default Min;
