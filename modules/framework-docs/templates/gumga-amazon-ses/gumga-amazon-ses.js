const GumgaAmazonSes = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
            versionDocs: '=?'
        },
        link($scope, elm, attrs){

            $scope.getContent = function() {
                return './modules/framework-docs/templates/gumga-amazon-ses/'+$scope.versionDocs+'/gumga-amazon-ses.html';
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

GumgaAmazonSes.$inject = [];

export default GumgaAmazonSes;
