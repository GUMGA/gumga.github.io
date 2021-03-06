const FormButtons = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/formbuttons/'+$scope.versionDocs+'/formbuttons.html';
          }

          $scope.foo = function(){
            alert('Clicou em salvar!')
          }

        }
    }
}

FormButtons.$inject = [];

export default FormButtons;
