const Number = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/number/'+$scope.versionDocs+'/number.html';
          }

        }
    }
}

Number.$inject = [];

export default Number;
