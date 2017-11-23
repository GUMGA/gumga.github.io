const Use = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/gumga-report/templates/use/'+$scope.versionDocs+'/use.html';
            }

        }
    }
}

Use.$inject = [];

export default Use;
