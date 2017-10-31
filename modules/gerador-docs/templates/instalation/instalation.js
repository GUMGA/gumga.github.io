const Instalation = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/gerador-docs/templates/instalation/'+$scope.versionDocs+'/pre-requisito.html';
            }

        }
    }
}

Instalation.$inject = [];

export default Instalation;
