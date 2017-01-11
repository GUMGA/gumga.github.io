const Instalation = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link($scope, elm, attrs){

          $scope.getContent = function() {
              return './modules/components-docs/templates/instalation/'+$scope.versionDocs+'/instalation.html';
          }

        }
    }
}

Instalation.$inject = [];

export default Instalation;
