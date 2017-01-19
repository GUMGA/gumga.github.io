const ImageUpload = ($q) => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/imageupload/'+$scope.versionDocs+'/imageupload.html';
          }

          $scope.entity = {};

          $scope.upload  = function(image){
            return $q(function(resolve){
              //EXEMPLO DA RESPOSTA DO BACKEND
              resolve('OK')
            })
          }

          $scope.remove = function(){
            return $q(function(resolve){
              //EXEMPLO DA RESPOSTA DO BACKEND
              resolve('OK')
            })
          }

        }
    }
}

ImageUpload.$inject = ['$q'];

export default ImageUpload;
