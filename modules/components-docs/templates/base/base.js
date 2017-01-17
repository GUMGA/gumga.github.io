const Base = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/base/'+$scope.versionDocs+'/base.html';
          }

        }
    }
}

Base.$inject = [];

export default Base;
