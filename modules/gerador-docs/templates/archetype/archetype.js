const Archetype = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/gerador-docs/templates/archetype/'+$scope.versionDocs+'/archetype.html';
            }

            $scope.gotoAnchor = function(anchor){
                if(window.PR){
                    PR.prettyPrint();
                }
                $('html, body').animate({
                    scrollTop: $('#'+anchor).offset().top - 50
                }, 1000);
            }

        }
    }
}

Archetype.$inject = [];

export default Archetype;
