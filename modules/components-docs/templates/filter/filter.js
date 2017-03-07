const Filter = () => {
  return {
    restrict: 'E',
    template: '<div ng-include="getContent()"></div>',
    scope: {
      versionDocs: '=?'
    },
    link: ($scope) => {

      $scope.getContent = function () {
        return './modules/components-docs/templates/filter/' + $scope.versionDocs + '/filter.html';
      }

      $scope.searchFilter = function (value) {
        value.source = value.source.substring(0,30)+"...";
        $scope.result = value;
      }


      $scope.sexos = [
        {
          "field": "MASCULINO",
          "label": "Masculino"
        },
        {
          "field": "FEMININO",
          "label": "Feminino"
        },
        {
          "field": "NAO_INFORMADO",
          "label": "Não informado"
        }
      ]

      $scope.selects = [
        {
          "field": "selectField1",
          "label": "selectLabel 1"
        },
        {
          "field": "selectField2",
          "label": "selectLabel 2"
        },
        {
          "field": "selectField3",
          "label": "selectLabel 3"
        }
      ];

    }
  }
}

Filter.$inject = [];

export default Filter;
