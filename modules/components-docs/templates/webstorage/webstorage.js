const WebStorage = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/webstorage/'+$scope.versionDocs+'/webstorage.html';
          }

        }
    }
}

WebStorage.$inject = [];

export default WebStorage;
