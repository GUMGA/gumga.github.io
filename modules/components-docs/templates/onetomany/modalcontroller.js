export default function ModalClienteController($scope, entity, $uibModalInstance){

  $scope.entity = angular.copy(entity) || {};

  $scope.cancelar = function(){
    $uibModalInstance.dismiss('cancel');
  }

  $scope.salvar = function(entity){
    $uibModalInstance.close(entity);
  }

}

ModalClienteController.$inject = ['$scope', 'entity', '$uibModalInstance'];
