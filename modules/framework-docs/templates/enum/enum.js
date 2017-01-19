const Enum = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/framework-docs/templates/enum/'+$scope.versionDocs+'/enum.html';
            }

        }
    }
}

Enum.$inject = [];

export default Enum;
