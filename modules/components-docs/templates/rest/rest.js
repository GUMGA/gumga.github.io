const Rest = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/rest/'+$scope.versionDocs+'/rest.html';
          }

        }
    }
}

Rest.$inject = [];

export default Rest;
