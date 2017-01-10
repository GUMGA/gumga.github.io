const Confirm = () => {
    return {
        restrict: 'E',
        templateUrl: './modules/components-docs/templates/confirm/confirm.html',
        scope: {
        },
        link: ($scope) => {

            $scope.example = function(){
                alert('Função executada');
            }

        }
    }
}

Confirm.$inject = [];

export default Confirm;
