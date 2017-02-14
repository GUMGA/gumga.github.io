const GumgaAcademy5 = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/academy/templates/gumga-academy5/'+$scope.versionDocs+'/gumga-academy5.html';
            }


        }
    }
}

GumgaAcademy5.$inject = [];

export default GumgaAcademy5;
