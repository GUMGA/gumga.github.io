const FileUpload = ($q) => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/fileupload/'+$scope.versionDocs+'/fileupload.html';
          }

          $scope.entity = {};

          $scope.uploadStart = function() {
            console.log('START')
          }
          $scope.uploadComplete = function(e) {
            console.log('COMPLETE')
          }
          $scope.uploadAbort = function(e) {
            console.log('ABORT')
          }
          $scope.uploadError = function(e) {
            console.log('ERROR')
          }

        }
    }
}

FileUpload.$inject = ['$q'];

export default FileUpload;
