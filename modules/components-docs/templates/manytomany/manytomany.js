const ManyToMany = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link($scope, elm, attrs){

          $scope.getContent = function() {
              return './modules/components-docs/templates/manytomany/'+$scope.versionDocs+'/manytomany.html';
          }

          $scope.searchLeft = function(param){
              console.info('GumgaManyToMany','Filtro:', param);
          }

          $scope.selecionados = [
            {
              nome: 'Smart TV LED 43" Samsung'
            }
          ];

          $scope.dados = [
            {
              nome: 'Notebook Acer Aspire'
            },
            {
              nome: 'Motorola Moto X (2a Geração) 32GB'
            },
            {
              nome: 'Smart TV LED 43" Samsung'
            },
            {
              nome: 'Ar Condicionado Split 7000 BTU/s'
            }
          ]

        }
    }
}

ManyToMany.$inject = [];

export default ManyToMany;
