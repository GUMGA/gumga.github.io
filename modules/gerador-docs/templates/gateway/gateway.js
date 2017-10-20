const Gateway = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/gerador-docs/templates/gateway/'+$scope.versionDocs+'/gateway.html';
            }

        }
    }
}

Gateway.$inject = [];

export default Gateway;
