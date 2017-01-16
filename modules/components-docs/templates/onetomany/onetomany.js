const OneToMany = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link($scope, elm, attrs){

          $scope.getContent = function() {
              return './modules/components-docs/templates/onetomany/'+$scope.versionDocs+'/onetomany.html';
          }

          $scope.clientes = [{
            nome: 'Mateus Miranda',
            id: 1
          }];

        }
    }
}

OneToMany.$inject = [];

export default OneToMany;
