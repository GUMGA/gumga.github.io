const Address = () => {
    return {
        restrict: 'E',
        templateUrl: './modules/components-docs/templates/address/address.html',
        scope: {
        },
        link: ($scope) => {
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
