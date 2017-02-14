const GumgaAcademy3 = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/academy/templates/gumga-academy3/'+$scope.versionDocs+'/gumga-academy3.html';
            }


        }
    }
}

GumgaAcademy3.$inject = [];

export default GumgaAcademy3;
