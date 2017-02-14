const GumgaAcademy2 = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/academy/templates/gumga-academy2/'+$scope.versionDocs+'/gumga-academy2.html';
            }


        }
    }
}

GumgaAcademy2.$inject = [];

export default GumgaAcademy2;
