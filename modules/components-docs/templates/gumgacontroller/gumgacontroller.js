const GumgaController = ($q) => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link: ($scope) => {

            $scope.getContent = function () {
                return './modules/components-docs/templates/gumgacontroller/' + $scope.versionDocs + '/gumgacontroller.html';
            }
        }
    }
}

GumgaController.$inject = ['$q'];

export default GumgaController;
