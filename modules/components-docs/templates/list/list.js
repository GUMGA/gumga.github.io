const List = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link($scope, elm, attrs){

          $scope.getContent = function() {
              return './modules/components-docs/templates/list/'+$scope.versionDocs+'/list.html';
          }

          $scope.gotoAnchor = function(anchor){
            console.log(anchor)
            if(window.PR){
                PR.prettyPrint();
            }
            $('html, body').animate({
              scrollTop: $('#'+anchor).offset().top - 50
            }, 1000);
          }

          //A ordenação abaixo é um exemplo de ordenação no front
          //Se você usa o framework gumga é recomendado fazer a ordenação no backend
          $scope.ordenar = function(field, dir){
              console.log("Field:" + field, "Dir: " + dir);
              $scope.dados = $scope.dados.sort(function(a, b){
                  a = parseInt(a[field]);
                  b = parseInt(b[field]);
                  return dir == 'asc' ? a - b : b - a;
              });
          }

          $scope.configuracao = {
            columns: 'nome,idade',
            checkbox: true,
            selection: 'multi',
            sortDefault: 'nome,idade',
            columnsConfig: [
              {
                name: 'nome',
                sortField: 'name',
                conditional: function(value){
                  return {
                    '2px solid black': value.idade <= 35,
                    '2px solid red': value.idade < 22,
                    '2px solid blue': value.idade > 35
                  }
                },
                title: 'Nome do cliente'
              },
              {
                name: 'idade',
                title: 'Idade',
                sortField: 'idade',
                content: '<b>{{$value.idade}}</b>'
              }
            ]
          }

          $scope.dados = [
            {
              nome: 'Mateus Miranda de Almeida',
              idade: 20
            },
            {
              nome: 'João Ribeiro da Silva',
              idade: 34,
            },
            {
              nome: 'Maria Ferreira dos Santos',
              idade: 49,
            },
            {
              nome: 'Felipe Sabadini',
              idade: 23
            }
          ];

        }
    }
}

List.$inject = [];

export default List;
