const Configuration = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/security-embedded/templates/configuration/'+$scope.versionDocs+'/configuration.html';
            }

        }
    }
}

Configuration.$inject = [];

export default Configuration;
