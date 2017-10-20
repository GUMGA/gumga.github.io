const Domain = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/gerador-docs/templates/domain/'+$scope.versionDocs+'/domain.html';
            }

        }
    }
}

Domain.$inject = [];

export default Domain;
