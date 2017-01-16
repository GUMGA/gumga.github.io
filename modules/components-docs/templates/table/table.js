const Table = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/table/'+$scope.versionDocs+'/table.html';
          }

          $scope.list = [{nome: 'Mateus Miranda', idade: 20},{nome: 'Felipe Sabadini', idade: 23}];

          $scope.select = function(selected){
            console.info('GumgaTable', ' Selecionado: ', selected)
          }

        }
    }
}

Table.$inject = [];

export default Table;
