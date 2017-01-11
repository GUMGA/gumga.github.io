const Counter = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/counter/'+$scope.versionDocs+'/counter.html';
          }

          $scope.entity = {name:'example'};

        }
    }
}

Counter.$inject = [];

export default Counter;
