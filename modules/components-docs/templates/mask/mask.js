const Mask = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/mask/'+$scope.versionDocs+'/mask.html';
          }

          $scope.maskOptions = {
            maskDefinitions: {
              'teste': /mateus/ // <= aqui vai sua regex
            },
            clearOnBlur: false,
            eventsToHandle: ['input', 'keyup', 'click', 'focus']
          };

        }
    }
}

Mask.$inject = [];

export default Mask;
