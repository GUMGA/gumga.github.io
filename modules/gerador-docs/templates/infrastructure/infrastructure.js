const Infrastructure = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/gerador-docs/templates/infrastructure/'+$scope.versionDocs+'/infrastructure.html';
            }

        }
    }
}

Infrastructure.$inject = [];

export default Infrastructure;
