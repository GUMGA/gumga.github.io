const Confirm = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/confirm/'+$scope.versionDocs+'/confirm.html';
          }

          $scope.example = function(){
              alert('Função executada');
          }

        }
    }
}

Confirm.$inject = [];

export default Confirm;
