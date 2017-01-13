const Filter = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/filter/'+$scope.versionDocs+'/filter.html';
          }

          $scope.searchFilter = function(value){
            $scope.result = value;
          }


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
