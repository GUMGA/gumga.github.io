const Alert = (GumgaAlert) => {
    return {
        restrict: 'E',
        template: '<div ng-include="getContent()"></div>',
        scope: {
          versionDocs: '=?'
        },
        link: ($scope) => {

          $scope.getContent = function() {
              return './modules/components-docs/templates/alert/'+$scope.versionDocs+'/alert.html';
          }

          var config = {
            offset: 50, //Tamanho da distância entre o alerta e tela.
            timer: 100, //Tempo que irá demorar para a mensagem aparecer após
            delay: 3500,
            alowDismiss:true,
            animationEnter: 'animated bounceInRight',
            animationExit: 'animated bounceOutRight'
          }

          $scope.message = function(type) {
            switch (type) {
              case "warning":
                  GumgaAlert.createWarningMessage("Titulo", "Mensagem", config);
                break;
              case "danger":
                  GumgaAlert.createDangerMessage("Titulo", "Mensagem", config);
                break;
              case "success":
                  GumgaAlert.createSuccessMessage("Titulo", "Mensagem", config);
                break;
              case "info":
                  GumgaAlert.createInfoMessage("Titulo", "Mensagem", config);
                break;
            }
          }

        }
    }
}

Alert.$inject = ['GumgaAlert'];

export default Alert;
