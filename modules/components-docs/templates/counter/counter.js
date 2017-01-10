const Counter = () => {
    return {
        restrict: 'E',
        templateUrl: './modules/components-docs/templates/counter/counter.html',
        scope: {
        },
        link: ($scope) => {
            $scope.entity = {name:'example'};
        }
    }
}

Counter.$inject = [];

export default Counter;
