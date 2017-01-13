const ValidateType = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/validatetype/'+$scope.versionDocs+'/validatetype.html';
          }

        }
    }
}

ValidateType.$inject = [];

export default ValidateType;
