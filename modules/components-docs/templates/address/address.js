const Address = () => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/address/'+$scope.versionDocs+'/address.html';
          }

          $scope.address = {};

          $scope.start = function(){
            console.log('start')
          }

          $scope.success = function(){
            console.log('success')
          }

          $scope.error = function(){
            console.log('error')
          }

        }
    }
}

Address.$inject = [];

export default Address;
