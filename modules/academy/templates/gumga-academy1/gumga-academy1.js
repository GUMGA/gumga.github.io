const GumgaAcademy1 = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/academy/templates/gumga-academy1/'+$scope.versionDocs+'/gumga-academy1.html';
            }


        }
    }
}

GumgaAcademy1.$inject = [];

export default GumgaAcademy1;
