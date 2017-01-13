const Form = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/form/'+$scope.versionDocs+'/form.html';
          }

        }
    }
}

Form.$inject = [];

export default Form;
