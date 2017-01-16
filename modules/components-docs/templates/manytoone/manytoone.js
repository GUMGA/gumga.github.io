const ManyToOne = ($q) => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link($scope, elm, attrs){

          $scope.getContent = function() {
              return './modules/components-docs/templates/manytoone/'+$scope.versionDocs+'/manytoone.html';
          }

          $scope.produto = {
            nome: 'Motorola Moto X (2a Geração) 32GB',
            id: 2
          };

          //ESSA FUNÇÃO É NECESSÁRIA SER ASSÍNCRONA,
          //PARA O EXEMPLO CRIAMOS UMA PROMISSE.
          $scope.getSearch = function(param){
              return $q(function(resolve){
                  var arr = $scope.produtos.filter(function(produto){
                    return produto.nome.indexOf(param) != -1;
                  })
                  resolve(arr);
              })
          }

          $scope.produtos = [
            {
              nome: 'Notebook Acer Aspire',
              id: 1
            },
            {
              nome: 'Motorola Moto X (2a Geração) 32GB',
              id: 2
            },
            {
              nome: 'Smart TV LED 43" Samsung',
              id: 3
            },
            {
              nome: 'Ar Condicionado Split 7000 BTU/s',
              id: 4
            }
          ]

        }
    }
}

ManyToOne.$inject = ['$q'];

export default ManyToOne;
