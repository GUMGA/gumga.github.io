const Query = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/query/'+$scope.versionDocs+'/query.html';
          }

          $scope.simple = function(field, param){
            console.info('GumgaQuery', 'Field: '+field+', Valor:' +param)
          }

          $scope.advanced = function(value){
            console.info('GumgaQuery', 'Value: '+value)
          }

        }
    }
}

Query.$inject = [];

export default Query;
