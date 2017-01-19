const Presentation = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/framework-docs/templates/presentation/'+$scope.versionDocs+'/presentation.html';
            }

        }
    }
}

Presentation.$inject = [];

export default Presentation;
