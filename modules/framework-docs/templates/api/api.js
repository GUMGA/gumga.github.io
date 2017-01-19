const Api = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/framework-docs/templates/api/'+$scope.versionDocs+'/api.html';
            }

        }
    }
}

Api.$inject = [];

export default Api;
