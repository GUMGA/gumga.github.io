const Application = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/gerador-docs/templates/application/'+$scope.versionDocs+'/application.html';
            }

        }
    }
}

Application.$inject = [];

export default Application;
