const GumgaAcademy4 = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/academy/templates/gumga-academy4/'+$scope.versionDocs+'/gumga-academy4.html';
            }


        }
    }
}

GumgaAcademy4.$inject = [];

export default GumgaAcademy4;
