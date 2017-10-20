const JavaDocs = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/gerador-docs/templates/java-docs/'+$scope.versionDocs+'/java-docs.html';
            }

        }
    }
}

JavaDocs.$inject = [];

export default JavaDocs;
