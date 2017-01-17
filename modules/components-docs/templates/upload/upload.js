const Upload = ($q) => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/upload/'+$scope.versionDocs+'/upload.html';
          }

          $scope.entity = {};

          $scope.upload  = function(image){
            return $q(function(resolve){
              //EXEMPLO DA RESPOSTA DO BACKEND
              resolve('uploadData1484652958670090')
            })
          }

          $scope.delete = function(){
            $scope.entity.image = {};
          }

        }
    }
}

Upload.$inject = ['$q'];

export default Upload;
