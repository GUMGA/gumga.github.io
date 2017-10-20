const PreRequisito = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/gerador-docs/templates/pre-requisito/'+$scope.versionDocs+'/pre-requisito.html';
            }

        }
    }
}

PreRequisito.$inject = [];

export default PreRequisito;
