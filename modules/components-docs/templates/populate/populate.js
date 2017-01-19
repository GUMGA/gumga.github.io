const Populate = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/populate/'+$scope.versionDocs+'/populate.html';
          }

        }
    }
}

Populate.$inject = [];

export default Populate;
